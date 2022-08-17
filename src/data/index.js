import { combineReducers } from 'redux'
import auth from './auth'
import users from './users'
import messages from './messages'

const chat = combineReducers({
    auth,
    users,
    messages
})

export default chat