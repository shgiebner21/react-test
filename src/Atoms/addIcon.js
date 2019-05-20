import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import AddPhoto from '@material-ui/icons/AddPhotoAlternate'


const styles = theme => ({
    root: {
      color: theme.palette.text.primary,
    },
    icon: {
      margin: theme.spacing.unit,
      fontSize: 32,
    },
  })
  
function AddIcon(props) {
    const { onClick } = props

      return <AddPhoto onClick={onClick} />
}

export default withStyles(styles)(AddIcon)