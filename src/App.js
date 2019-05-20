import React, { Component } from 'react';

import Screen from './Pages/screen'
import ButtonAppBar from './Molecules/appBar'

import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <ButtonAppBar onMenuClick={this.onMenuClick} />
        </header> 
  
      <div className="App" >
        <Screen />
      </div>

      </div>
    )
  }

}

