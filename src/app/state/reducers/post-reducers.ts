import { Action } from "../acation";
import { post } from "src/app/theme/shared/module/module";
import { COMMENT_ADD, COMMENT_EDIT, COMMENT_REMOVW, POST_ADD, POST_DELETE, POST_EDIT, POST_LIST_REQUEST, POST_LIST_SUCCESS } from "../acation/post-action";
import { storeUtil } from "../store-util";
import { createSelector } from "@ngrx/store";

export interface postReducersState {
   
    loading: boolean
    loaded: boolean
    entities : {[id:number]:post}
    ids:number[]
}


const intailstate: postReducersState = {
    loaded: false,
    loading: false,
    entities:{},
    ids:[]
}


export function PostReducera(state = intailstate, action: Action): postReducersState {
    switch (action.type) {
        case POST_LIST_REQUEST: {
            return { ...state, loading: true }
        }

        case POST_LIST_SUCCESS: {
            const postData = action.payload.data
            //[{},{},{},{}]
            const obj = storeUtil.normalize(postData)
            //{id:{obj1},id{obj2}}
            const newEntity =  {...state.entities, ...obj}
            
            const ids = postData.map((post: { id: any; }) =>  post.id)
            const newId = storeUtil.filterDuplicateIds([...state.ids,...ids])
            return { ...state, ...{loaded:true,loading:false,entities:newEntity,ids:newId}}
        }

        case POST_DELETE:{
            const id = action.payload.id;
            const newId = state.ids.filter(ele=> ele !== id)
            const newEntites = storeUtil.removeKey(state.entities,id)

            return {...state,...{entities:newEntites,ids:newId}}
        }

        case POST_EDIT:{
            const post = action.payload.data
            const entity = {[post.id]:post}
            const newEntity = {...state.entities,...entity}
            return {...state,...{entities:newEntity }}
        }
    
        case POST_ADD:{
          
           const post = action.payload.data
           const entity = {[post.id]:post}
           const newEntity = {...state.entities,...entity}
           const newId = storeUtil.filterDuplicateIds([...state.ids,post.id])
           return {...state,...{entities:newEntity,ids:newId}}
          }
      
        case COMMENT_ADD:{
            const id = action.payload.postId
            const c_data = action.payload.data
            const oddComment:post = JSON.parse(JSON.stringify(state.entities[id]))
            oddComment.comments.push(c_data)
            const obj = {[id]:oddComment}
            const  entities = {...state.entities,...obj}
            return {...state,...{entities}}

        }

        case COMMENT_EDIT:{
            const id = action.payload.postId
            const c_data = action.payload.data
            const oddComment:post = JSON.parse(JSON.stringify(state.entities[id]))
            const removeComment = oddComment.comments.filter(data => data.id !== c_data.id)
            removeComment.push(c_data)
            oddComment.comments = removeComment  
            const obj = {[id]:oddComment}
            const  entities = {...state.entities,...obj}
            return {...state,...{entities}}

        }

        case COMMENT_REMOVW:{
            const id = action.payload.id
            const postId = action.payload.postId
            const oddComment:post = JSON.parse(JSON.stringify(state.entities[postId]))
            console.log(oddComment)
            const removeComment = oddComment.comments.filter(data => data.id !== id)
            oddComment.comments = removeComment  
            const obj = {[postId]:oddComment}
            const  entities = {...state.entities,...obj}
            return {...state,...{entities}}

        }

        default: {

            return state;
        }
    }
}


export const getLoaded = (state:postReducersState) => state.loaded
export const getLoading = (state:postReducersState) => state.loading
export const getEntity = (state:postReducersState) => state.entities
export const getId = (state:postReducersState) => state.ids
export const getUsers = createSelector(getEntity,( (entity) => storeUtil.anNormalize(entity)))

