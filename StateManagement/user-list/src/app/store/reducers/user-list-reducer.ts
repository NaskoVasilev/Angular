import { GenericAction } from '../actions/generic.action';
import { UserState } from '../application-state';

const initialState: UserState = {
    userList: ['Nasko', 'Vasko']
}

export function userListReducer(state: UserState = initialState, action: GenericAction<string>) {
    switch (action.type) {
        case 'ADD_USER':
            return { ...state, userList: [...state.userList, action.payload] }
        default:
            return state;
    }
}