import actionTypes from '../constants/actions'

const initState = { isLoading: false, data: [] }

function postsReducer(state = initState, action) {
   switch (action.type) {
      case actionTypes.GET_POST_REQUEST:
         return { ...state, isLoading: true }

      case actionTypes.GET_POST_SUCCESS:
         return { ...state, isLoading: false, data: action.payload }

      case actionTypes.GET_POST_FAIL:
         return { ...state, isLoading: false }
      default:
         return state
   }
}

export default postsReducer
