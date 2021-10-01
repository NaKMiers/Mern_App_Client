import { call, put, takeLatest } from 'redux-saga/effects'
import api from '../../api'
import actions from '../actions'
import actionTypes from '../constants/actions'

function* fetchPostsSaga(action) {
   const posts = yield call(api.fetchPosts)
   yield put(actions.getPostSuccess(posts.data))
}

function* mySaga() {
   yield takeLatest(actionTypes.GET_POST_REQUEST, fetchPostsSaga)
}

export default mySaga
