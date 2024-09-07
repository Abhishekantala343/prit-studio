import { combineReducers } from 'redux'

import authReducer from './auth/authSlice'

const reducer = combineReducers({
  Auth: authReducer,
})

export default reducer