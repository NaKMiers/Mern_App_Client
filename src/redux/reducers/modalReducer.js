import actionTypes from '../constants/actionTypes'

const initState = { isShowModal: false }

function modalReducer(state = initState, action) {
   switch (action.type) {
      case actionTypes.SHOW_MODAL:
         return { isShowModal: true }

      case actionTypes.HIDE_MODAL:
         return { isShowModal: false }

      default:
         return state
   }
}

export default modalReducer
