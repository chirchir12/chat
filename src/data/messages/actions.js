
import * as actionsTypes from './actionTypes'
export const addMessage = (param)=> {
    return {
        type:actionsTypes.ADD_MESSAGE,
        param
    }
}

export const receiveMessage = (param)=> {
    return {
        type:actionsTypes.GET_MESSAGE,
        param
    }
}