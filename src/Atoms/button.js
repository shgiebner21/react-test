import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
})


function NewButton(props) {
      const { textLabel, color, variant, onClick } = props

        return (
            <Button variant={variant} color={color}
              onClick={onClick}>
            {textLabel}
            </Button>
          )

}

export default withStyles(styles)(NewButton)