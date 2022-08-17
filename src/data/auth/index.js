import * as actionsTypes from './actionTypes'

const auth = (state = {}, action) => {
    switch (action.type) {
      case actionsTypes.LOGIN:
        const newstate =  Object.assign({}, state, {...action.param})
        return newstate
      default:
        return state
    }
  }
  
  export default auth