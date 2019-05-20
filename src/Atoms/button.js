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
      const { textLabel, color, variant } = props

        return (
            <Button variant={variant} color={color}
              onClick={e => console.log(`click ${textLabel}`)}>
            {textLabel}
            </Button>
          )

}

export default withStyles(styles)(NewButton)