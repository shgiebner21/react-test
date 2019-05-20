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
    const { textLabel, color, variant } = props

      return (
          <AddPhoto >
          </AddPhoto>
        )

}

export default withStyles(styles)(AddIcon)