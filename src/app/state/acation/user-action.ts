import { user } from "src/app/theme/shared/module/module"

export const USER_LIST_REQUEST = 'user list request'
export const USER_LIST_SUCCESS = 'user list success'
export const USER_DELETE = 'user delete success'
export const USER_ADD = 'user add success'
export const USER_EDIT = 'user edit success'

export class userListRequest{
    type = USER_LIST_REQUEST
}

export class userListSuccess{
    type = USER_LIST_SUCCESS
    constructor(public payload?:{users:user[]}){

    }
}

export class userDelete{
    readonly type = USER_DELETE
    constructor(public payload?:{id:number}){

    }
}

export class userEdit{
    readonly type = USER_EDIT
    constructor(public payload?:{data:user}){

    }
}
export class userAdd{
    readonly type = USER_ADD
    constructor(public payload?:{data:user}){

    }
}



