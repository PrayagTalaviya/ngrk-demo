import { comment, post } from "src/app/theme/shared/module/module"


export const POST_LIST_REQUEST = 'post list request'
export const POST_LIST_SUCCESS = 'post list success'
export const POST_DELETE = 'post delete success'
export const POST_ADD = 'post add success'
export const POST_EDIT = 'post edit success'
export const COMMENT_ADD =  'comment add '
export const COMMENT_EDIT = 'comment edit '
export const COMMENT_REMOVW = 'comment remove'


export class postListRequest{
    readonly type = POST_LIST_REQUEST
}

export class postListSuccess{
    readonly type = POST_LIST_SUCCESS
    constructor(public payload?:{data:post[]}){

    }
}

export class postDelete{
    readonly type = POST_DELETE
    constructor(public payload?:{id:number}){

    }
}

export class postEdit{
    readonly type = POST_EDIT
    constructor(public payload?:{data:post}){

    }
}
export class postAdd{
    readonly type = POST_ADD
    constructor(public payload?:{data:post}){

    }
}

export class commentAdd{
    readonly type = COMMENT_ADD
    constructor(public payload?:{data:comment,postId:number}){

    }
}
export class commentEdit{
    readonly type = COMMENT_EDIT
    constructor(public payload?:{data:comment,postId:number}){

    }
}
export class commentRemove{
    readonly type = COMMENT_REMOVW
    constructor(public payload?:{id:number,postId:number}){

    }
}