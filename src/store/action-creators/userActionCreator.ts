import axios from "axios"
import { Dispatch } from "react"
import { userAction, userAtyonTypes } from "../../types/user-type"

export const fetchUsers = () => {
    return async (dispatch: Dispatch<userAction>) => {
        try {
            dispatch({type: userAtyonTypes.FETCH_USERS})
            const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(()=>{
                dispatch({type: userAtyonTypes.FETCH_USERS_SUCCESS, payload: responce.data})
            }, 1000)
        } catch (error) {
            dispatch({type: userAtyonTypes.FETCH_USERS_ERROR, payload: 'Ошибка при загрузке юзеров'})
        }
    }
}