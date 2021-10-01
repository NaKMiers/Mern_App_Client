import {
   Avatar,
   Card,
   CardActions,
   CardContent,
   CardHeader,
   CardMedia,
   IconButton,
   Menu,
   MenuItem,
   Typography,
   withStyles
} from '@material-ui/core'
import FavoriteIcon from '@material-ui/icons/Favorite'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import moment from 'moment'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import actions from '../../../redux/actions'
import styles from './styles'

function Post({ classes, post, actionCreator }) {
   const [anchorEl, setAnchorEl] = React.useState(null)
   const open = Boolean(anchorEl)
   const handleClickMoreButton = e => {
      setAnchorEl(e.currentTarget)
   }

   const handleClose = () => {
      setAnchorEl(null)
   }

   const onLikeButtonClick = () => {
      const { updatePostRequest } = actionCreator
      updatePostRequest({ ...post, likeCount: ++post.likeCount })
   }

   const handleDeletePost = () => {
      const { deletePostRequest } = actionCreator
      deletePostRequest(post)

      setAnchorEl(null)
   }

   return (
      <Card>
         <CardHeader
            avatar={<Avatar>dP</Avatar>}
            title={post.author}
            subheader={moment(post.updatedAt).format('hh:mm mm dd, yyyy')}
            action={
               <IconButton onClick={handleClickMoreButton}>
                  <MoreVertIcon />
               </IconButton>
            }
         />
         <CardMedia image={post.attachment} title='Title' className={classes.media} />
         <CardContent>
            <Typography variant='h5' color='textPrimary'>
               {post.title}
            </Typography>
            <Typography variant='h5' color='textPrimary'>
               {post.content}
            </Typography>
         </CardContent>
         <CardActions>
            <IconButton onClick={onLikeButtonClick}>
               <FavoriteIcon />
               <Typography component='p'>{post.likeCount} likes</Typography>
            </IconButton>
         </CardActions>
         <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               'aria-labelledby': 'basic-button'
            }}
         >
            <MenuItem onClick={handleDeletePost}>Delete</MenuItem>
         </Menu>
      </Card>
   )
}

const mapDispatch = dispatch => ({ actionCreator: bindActionCreators(actions, dispatch) })

const withConnect = connect(null, mapDispatch)

export default compose(withConnect, withStyles(styles))(Post)
