import * as actionsTypes from './actionTypes'

const Messages = (state = {}, action) => {
    switch (action.type) {
      case actionsTypes.GET_MESSAGE:{
        const newstate =  Object.assign({}, {...state, ...action.param})
        return newstate
      }
      case actionsTypes.ADD_MESSAGE:{
          const message = {}
          message[action.param.id] = action.param
        const newstate =  Object.assign({}, {...state, ...message})
        return newstate
      }
      default:
        return state
    }
  }
  
  export default Messages