import React, { Component } from 'react'
import ImageAvatar from '../Atoms/avatar'
import DialogTitle from '@material-ui/core/DialogTitle'
import Dialog from '@material-ui/core/Dialog'
import DialogCard from '../Molecules/dialogCard'
import blue from '@material-ui/core/colors/blue'

import image from '../assets/shg_avatar.jpeg'

const styles = {
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
}

export default class SimpleDialog extends Component {

  render() {
    const { user, classes, onClose, selectedValue, ...other } = this.props

    return (
      <Dialog onClose={onClose} aria-labelledby="simple-dialog-title" {...other}>
        <div style={styles.card} >
          <ImageAvatar image={image} />
          <h5>{user.name}</h5>
          <h5>{user.city}</h5>
        </div>

        <DialogCard name="Account Settings" icon="person" />
        <DialogCard name="Paired Devices" icon="device" />
        <DialogCard name="Invites" icon="device" />

        <DialogCard name="Triggers" icon="device" />
        <DialogCard name="Logout" icon="device" />

      </Dialog>
    )
  }
}