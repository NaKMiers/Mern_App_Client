import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from './redux/actions'
import PropTypes from 'prop-types'
import HomePage from './pages/HomePage'

function App({ actionsCreator }) {
   const { getPostRequest } = actionsCreator
   getPostRequest()

   return <HomePage></HomePage>
}

App.propTypes = {
   actionsCreator: PropTypes.object
}

const mapState = state => ({})
const mapDispatch = dispatch => ({
   actionsCreator: bindActionCreators(actions, dispatch)
})

export default connect(mapState, mapDispatch)(App)
