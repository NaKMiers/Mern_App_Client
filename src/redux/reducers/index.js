import { combineReducers } from 'redux'
import postsReducer from './postsReducer'
import modalReducer from './modalReducer'

const reducers = combineReducers({ posts: postsReducer, modal: modalReducer })

export default reducers
