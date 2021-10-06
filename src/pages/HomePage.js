import { Container, Fab } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CreatePostModal from '../components/CreatePostModal'
import Header from '../components/Header'
import PostList from '../components/PostList'
import actions from '../redux/actions'
import useStyle from './styles'

function HomePage({ actionCreator }) {
   const openCreatePostModal = () => {
      const { showModal } = actionCreator
      showModal()
   }

   const classes = useStyle()

   return (
      <Container maxWidth='lg'>
         <Header />
         <PostList />
         <CreatePostModal />
         <Fab size='large' className={classes.addButton} onClick={openCreatePostModal}>
            <AddIcon />
         </Fab>
      </Container>
   )
}

HomePage.propTypes = {
   classes: PropTypes.object,
   actionCreator: PropTypes.object
}

const mapDispatch = dispatch => ({ actionCreator: bindActionCreators(actions, dispatch) })

export default connect(null, mapDispatch)(HomePage)
