import React from 'react'

import PersonIcon from '@material-ui/icons/Person'

function DialogCard(props) {
  const { name, icon } = props

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginLeft: '50px', marginRight: '50px' }} >
      <PersonIcon />
      <h4>{name}</h4>
    </div>
  )
}

export default DialogCard