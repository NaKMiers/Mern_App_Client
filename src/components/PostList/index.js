import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import Post from './Post'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import actions from '../../redux/actions'

class PostList extends Component {
   componentDidMount() {
      const { actionsCreator } = this.props
      const { getPostsRequest } = actionsCreator
      getPostsRequest()
   }

   renderPost = posts => {
      if (posts) {
         return posts.map(post => (
            <Grid key={post._id} item xs={12} sm={4}>
               <Post post={post} />
            </Grid>
         ))
      }
      return null
   }

   render() {
      const { posts } = this.props
      return (
         <Grid container spacing={2} alignItems='stretch'>
            {this.renderPost(posts.data)}
         </Grid>
      )
   }
}

PostList.propTypes = {
   actionsCreator: PropTypes.shape({
      getPostRequest: PropTypes.func
   })
}

const mapState = state => ({
   posts: state.posts
})

const mapDispatch = dispatch => ({
   actionsCreator: bindActionCreators(actions, dispatch)
})

export default connect(mapState, mapDispatch)(PostList)
