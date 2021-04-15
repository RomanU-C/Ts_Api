import { userAction, userAtyonTypes, userState } from "../../types/user-type"
const initialState: userState = {
    users: [],
    loading: false,
    error: null
}
export const userReducer = (state=initialState, action: userAction): userState => {
    switch (action.type) {
        case userAtyonTypes.FETCH_USERS:
           return {loading: true, error: null, users: []} 
        case userAtyonTypes.FETCH_USERS_SUCCESS:
           return {loading: false, error: null, users: action.payload}    
        case userAtyonTypes.FETCH_USERS_ERROR:
           return {loading: false, error: action.payload, users: []}  
        default:
            return state 
    }
}