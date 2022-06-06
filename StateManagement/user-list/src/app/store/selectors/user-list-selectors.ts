import { ApplicationState, UserState } from "../application-state";
import { createSelector } from '@ngrx/store';

export const selectUser = (state: ApplicationState) => state.users;

export const selectUsersList = createSelector(
    selectUser,
    (state: UserState) => state.userList
)