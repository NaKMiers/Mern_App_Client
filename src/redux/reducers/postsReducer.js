import actionTypes from '../constants/actionTypes'

const initState = { isLoading: false, data: [] }

function postsReducer(state = initState, action) {
   switch (action.type) {
      case actionTypes.GET_POST_REQUEST:
         return { isLoading: true, data: [] }
      case actionTypes.GET_POST_SUCCESS:
         return { isLoading: false, data: action.payload }
      case actionTypes.GET_POST_FAIL:
         return { ...state, isLoading: false }

      case actionTypes.CREATE_POST_SUCCESS:
         return { ...state, data: [...state.data, action.payload] }
      case actionTypes.CREATE_POST_FAIL:
         return { ...state, data: action.payload }

      case actionTypes.UPDATE_POST_SUCCESS:
         return {
            ...state,
            data: state.data.map(post => (post._id === action.payload._id ? action.payload : post))
         }

      case actionTypes.DELETE_POST_SUCCESS:
         let index = -1
         state.data.forEach((post, i) => {
            if (post._id === action.payload._id) {
               index = i
            }
         })
         state.data.splice(index, 1)
         return {
            ...state
         }

      default:
         return state
   }
}

export default postsReducer
