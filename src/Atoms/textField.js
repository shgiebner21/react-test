import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'


const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    color: "white",
  }
})

function NewTextField(props) {
  const { label, value, onChange, color } = props

    return (
      <TextField label={label}
        value={value}
        onChange={onChange}
        color={color}
        style={styles.textField} />
    )
}

export default withStyles(styles)(NewTextField)