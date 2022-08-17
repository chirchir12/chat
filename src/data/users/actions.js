
import * as actionsTypes from './actionTypes'
export const getUsers = (param)=> {
    return {
        type:actionsTypes.USERLIST,
        param
    }
}