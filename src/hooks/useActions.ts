import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as userActionCreator from './../store/action-creators/userActionCreator'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(userActionCreator, dispatch)
}