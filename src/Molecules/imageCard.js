import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import ImageAvatar from '../Atoms/avatar'
import AddIcon from '../Atoms/addIcon'

import image from '../assets/shg_avatar.jpeg'

const styles = {
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: '100px',
  }
}

function ImageCard(props) {
  const { name } = props

  return (
    <div style={styles.card} >
      <ImageAvatar image={image} />
      <AddIcon onClick={e => alert('Future ability to update image')} />
    </div>
  )
}

export default withStyles(styles)(ImageCard)