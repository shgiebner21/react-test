import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'


const styles = {
    avatar: {
      margin: 10,
    },
    bigAvatar: {
      margin: 10,
      width: 100,
      height: 100,
    },
  }

  function ImageAvatar(props) {
    const { image } = props
        return (
            <Grid container justify="center" alignItems="center">
            <Avatar alt="Stephen Giebner" src={image} style={styles.bigAvatar} />
          </Grid>
          )

}

export default withStyles(styles)(ImageAvatar)