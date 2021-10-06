import { call, put, takeLatest } from 'redux-saga/effects'
import api from '../../api'
import actions from '../actions'
import actionTypes from '../constants/actionTypes'

function* fetchPostsSaga() {
   try {
      const posts = yield call(api.fetchPosts)
      yield put(actions.getPostsSuccess(posts.data))
   } catch (error) {
      yield put(actions.getPostsFail(error))
   }
}

function* createPostSaga(action) {
   try {
      const posts = yield call(api.createPost, action.payload)
      yield put(actions.createPostSuccess(posts.data))
      yield put(actions.hideModal())
   } catch (error) {
      yield put(actions.createPostFail(error))
   }
}

function* updatePostSaga(action) {
   try {
      const updatedPost = yield call(api.updatePost, action.payload)
      yield put(actions.updatePostSuccess(updatedPost.data))
      yield put(actions.hideModal())
   } catch (error) {
      yield put(actions.updatePostFail(error))
   }
}

function* deletePostSaga(action) {
   try {
      const deletedPost = yield call(api.deletePost, action.payload)
      yield put(actions.deletePostSuccess(deletedPost.data))
   } catch (error) {
      yield put(actions.deletePostFail(error))
   }
}

function* mySaga() {
   yield takeLatest(actionTypes.GET_POST_REQUEST, fetchPostsSaga)
   yield takeLatest(actionTypes.CREATE_POST_REQUEST, createPostSaga)
   yield takeLatest(actionTypes.UPDATE_POST_REQUEST, updatePostSaga)
   yield takeLatest(actionTypes.DELETE_POST_REQUEST, deletePostSaga)
}

export default mySaga
