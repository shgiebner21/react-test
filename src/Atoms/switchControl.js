import React from 'react'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'

function SwitchLabel(props) {
  const { checked, color, value, onChange } = props

  const label = checked ? "Disable Pairing" : "Enable Pairing"

    return (
      <FormControlLabel  
        control={
          <Switch checked={checked} color={color}
            value={value}
            onChange={onChange} />
        }
        label={label}
      />
    )

}


export default SwitchLabel