import { Action } from '@ngrx/store'

export class GenericAction<T> implements Action {
    readonly type: string;
    payload: T;

    constructor(type: string, payload: T) {
        this.type = type;
        this.payload = payload;
    }
}