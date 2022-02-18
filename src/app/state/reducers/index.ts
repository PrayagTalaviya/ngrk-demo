import { ActionReducerMap,  createSelector } from "@ngrx/store";
import * as frompost from "./post-reducers";
import * as fromuser from "./user-reducers";

export interface rootReducersState {
    users: fromuser.userReducersState
    posts: frompost.postReducersState
}

export const rootRuducers: ActionReducerMap<rootReducersState> = {
    users: fromuser.UserReducera,
    posts: frompost.PostReducera
}

export const getUserState = (state: rootReducersState) => state.users
export const getPostState = (state: rootReducersState) => state.posts

export const getUserLoaded = createSelector(getUserState, fromuser.getLoaded)
export const getUserLoading = createSelector(getUserState, fromuser.getLoading)
export const getUser = createSelector(getUserState, fromuser.getUsers)
export const getEntitys = createSelector(getUserState, fromuser.getEntity)

export const getUserId = (state: rootReducersState, id: any) => {
    const entity = getEntitys(state)

    // console.log(entity[id.id])
    // return entity[id]
    return entity[id]
}

export const getPostLoaded = createSelector(getPostState,frompost.getLoaded )
export const getPostLoading = createSelector(getPostState, frompost.getLoading)
export const getPost = createSelector(getPostState, frompost.getUsers)
export const getPostEntitys = createSelector(getPostState, frompost.getEntity)

export const getPostId = (state: rootReducersState, id: any) => {
    const entity = getPostEntitys(state)

    // console.log(entity[id.id])
    // return entity[id]
    return entity[id]
}