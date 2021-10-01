import actionTypes from '../constants/actionTypes'

class Action {
   // get posts
   getPostsRequest = () => ({ type: actionTypes.GET_POST_REQUEST })
   getPostsSuccess = payload => ({ type: actionTypes.GET_POST_SUCCESS, payload })
   getPostsFail = error => ({ type: actionTypes.GET_POST_FAIL, error })

   // modal
   showModal = () => ({ type: actionTypes.SHOW_MODAL })
   hideModal = () => ({ type: actionTypes.HIDE_MODAL })

   // create post
   createPostRequest = payload => ({ type: actionTypes.CREATE_POST_REQUEST, payload })
   createPostSuccess = payload => ({ type: actionTypes.CREATE_POST_SUCCESS, payload })
   createPostFail = error => ({ type: actionTypes.CREATE_POST_FAIL, error })

   // update posts
   updatePostRequest = payload => ({ type: actionTypes.UPDATE_POST_REQUEST, payload })
   updatePostSuccess = payload => ({ type: actionTypes.UPDATE_POST_SUCCESS, payload })
   updatePostFail = error => ({ type: actionTypes.UPDATE_POST_FAIL, error })

   // delete posts
   deletePostRequest = payload => ({ type: actionTypes.DELETE_POST_REQUEST, payload })
   deletePostSuccess = payload => ({ type: actionTypes.DELETE_POST_SUCCESS, payload })
   deletePostFail = error => ({ type: actionTypes.DELETE_POST_FAIL, error })
}

export default new Action()
