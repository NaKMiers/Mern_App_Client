import React from 'react'
import { Container, Fab, withStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import Header from '../components/Header'
import PostList from '../components/PostList'
import styles from './styles'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import actions from '../redux/actions'
import PropTypes from 'prop-types'
import CreatePostModal from '../components/CreatePostModal'

function HomePage({ classes, actionCreator }) {
   const openCreatePostModal = () => {
      const { showModal } = actionCreator
      showModal()
   }

   return (
      <Container maxWidth='lg'>
         <Header />
         <PostList />
         <CreatePostModal />
         <Fab size='medium' className={classes.addButton} onClick={openCreatePostModal}>
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

const withConnect = connect(null, mapDispatch)

export default compose(withConnect, withStyles(styles))(HomePage)
