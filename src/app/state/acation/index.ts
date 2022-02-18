import { Action as ngrxAction } from "@ngrx/store";

export interface Action extends ngrxAction{
    payload?:any
}