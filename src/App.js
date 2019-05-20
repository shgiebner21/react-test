import React, { Component } from 'react';

import Screen from './Pages/screen'
import ButtonAppBar from './Molecules/appBar'
import SimpleDialog from './Organisms/dialog'

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      user: {
        name: 'Stephen Giebner',
        city: 'Charleston, SC'
      }
    }
  }

  // Had to use state above.  Could not get the create user Post to work.
  // Kept getting Integrity constraint violation: 1048 Column 'name' cannot be null

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = value => {
    this.setState({ open: false });
  }

  render() {
    const { open, user } = this.state

    return (
      <div>
        <header className="App-header">
          <ButtonAppBar onClick={this.handleClickOpen} />
        </header> 
  
      <div className="App" >
        <Screen />
      </div>

      <SimpleDialog user={user} open={open} onClose={this.handleClose} />

      </div>
    )
  }

}

