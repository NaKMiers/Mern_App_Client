import actionTypes from '../constants/actions'

class Action {
   // get posts
   getPostRequest = () => ({ type: actionTypes.GET_POST_REQUEST })
   getPostSuccess = payload => ({ type: actionTypes.GET_POST_SUCCESS, payload })
   getPostFail = error => ({ type: actionTypes.GET_POST_FAIL, error })
}

export default new Action()
