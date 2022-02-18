import { createSelector } from "@ngrx/store";
import { user } from "src/app/theme/shared/module/module";
import { rootReducersState } from ".";
import { Action } from "../acation";
import { userAdd, USER_ADD, USER_DELETE, USER_EDIT, USER_LIST_REQUEST, USER_LIST_SUCCESS } from "../acation/user-action";
import { storeUtil } from "../store-util";

export interface userReducersState {
   
    loading: boolean
    loaded: boolean
    entities : {[id:number]:user}
    ids:number[]
}

const intailstate: userReducersState = {
    loaded: false,
    loading: false,
    entities:{},
    ids:[]

}

export function UserReducera(state = intailstate, action: Action): userReducersState {
    switch (action.type) {
        case USER_LIST_REQUEST: {
            return { ...state, loading: true }
        }

        case USER_LIST_SUCCESS: {
            const userData = action.payload.users
            //[{},{},{},{}]
            const obj = storeUtil.normalize(userData)
            //{id:{obj1},id{obj2}}
            const newEntity =  {...state.entities, ...obj}
            
            const ids = userData.map((user: { id: any; }) =>  user.id)
            const newId = storeUtil.filterDuplicateIds([...state.ids,...ids])
            return { ...state, ...{loaded:true,loading:false,entities:newEntity,ids:newId}}
        }

        case USER_DELETE:{
            const id = action.payload.id;
            const newId = state.ids.filter(ele=> ele !== id)
            const newEntites = storeUtil.removeKey(state.entities,id)

            return {...state,...{entities:newEntites,ids:newId}}
        }

        case USER_EDIT:{
            const user = action.payload.data
            const entity = {[user.id]:user}
            const newEntity = {...state.entities,...entity}
            return {...state,...{entities:newEntity }}
        }
    
        case USER_ADD:{
          
           const user = action.payload.data
           const entity = {[user.id]:user}
           const newEntity = {...state.entities,...entity}
           const newId = storeUtil.filterDuplicateIds([...state.ids,user.id])
           return {...state,...{entities:newEntity,ids:newId}}
          }
      

        default: {
            return state;
        }
    }
}

export const getLoaded = (state:userReducersState) => state.loaded
export const getLoading = (state:userReducersState) => state.loading
export const getEntity = (state:userReducersState) => state.entities
export const getId = (state:userReducersState) => state.ids
export const getUsers = createSelector(getEntity,( (entity) => storeUtil.anNormalize(entity)))

