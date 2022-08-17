
import * as actionsTypes from './actionTypes'
export const login = (param)=> {
    return {
        type:actionsTypes.LOGIN,
        param
    }
}