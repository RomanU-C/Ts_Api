export interface userState {
    users: any[];
    loading: boolean;
    error: null | string;
}
export type userAction = fetchUserAction | fetchUserActionSuccess | fetchUserActionError
export enum userAtyonTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}
interface fetchUserAction {
    type: userAtyonTypes.FETCH_USERS;
}
interface fetchUserActionSuccess {
    type: userAtyonTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}
interface fetchUserActionError {
    type: userAtyonTypes.FETCH_USERS_ERROR;
    payload: string;
}


