import * as actionsTypes from './actionTypes'

const Users = (state = {}, action) => {
    switch (action.type) {
      case actionsTypes.USERLIST:
        const newstate =  Object.assign({}, {...state, ...action.param})
        return newstate
      default:
        return state
    }
  }
  
  export default Users