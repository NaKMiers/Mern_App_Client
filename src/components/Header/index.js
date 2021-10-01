import React from 'react'
import { Typography, withStyles } from '@material-ui/core'
import styles from './styles'
import PropTypes from 'prop-types'

const Header = ({ classes }) => {
   return (
      <Typography variant='h4' align='center' className={classes.container}>
         Blog
      </Typography>
   )
}

Header.propTypes = {
   classes: PropTypes.object
}
export default withStyles(styles)(Header)
