import { Modal, withStyles, TextField, TextareaAutosize, Button } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import styles from './styles'
import FileBase64 from 'react-file-base64'
import actions from '../../redux/actions'
import PropTypes from 'prop-types'

function CreatePostModal({ classes, modal, actionCreator }) {
   const [data, setData] = React.useState({
      title: '',
      content: '',
      attachment: ''
   })

   const onClose = () => {
      const { hideModal } = actionCreator
      hideModal()
   }

   const onSubmit = e => {
      e.preventDefault()
      const { createPostRequest } = actionCreator
      createPostRequest(data)
      setData({ title: '', content: '', attachment: '' })
   }

   const body = (
      <div className={classes.paper} id='simple-modal-title'>
         <h2>Create New Post</h2>
         <form noValidate autoComplete='off' className={classes.form}>
            <TextField
               className={classes.title}
               required
               label='Title'
               value={data.title}
               onChange={e => setData({ ...data, title: e.target.value })}
            />
            <TextareaAutosize
               className={classes.textarea}
               minRows={10}
               maxRows={15}
               placeholder='Content...'
               value={data.content}
               onChange={e => setData({ ...data, content: e.target.value })}
            />
            <FileBase64
               accept='image/*'
               multiple={false}
               type='file'
               value={data.attachment}
               onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
            />
            <div className={classes.footer}>
               <Button type='submit' variant='contained' fullWidth onClick={onSubmit}>
                  Post
               </Button>
            </div>
         </form>
      </div>
   )

   return (
      <div>
         <Modal
            className={classes.postModal}
            open={modal.isShowModal}
            onClose={onClose}
            aria-labelledby='modal-modal-title'
            aria-describedby='modal-modal-description'
         >
            {body}
         </Modal>
      </div>
   )
}

CreatePostModal.propTypes = {
   classes: PropTypes.object,
   modal: PropTypes.object,
   actionCreator: PropTypes.object
}

const mapState = state => ({ modal: state.modal })
const mapDispatch = dispatch => ({ actionCreator: bindActionCreators(actions, dispatch) })

const withConnect = connect(mapState, mapDispatch)

export default compose(withConnect, withStyles(styles))(CreatePostModal)
