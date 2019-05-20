import React, { Component } from 'react'

import ImageAvatar from '../Atoms/avatar'
import AddIcon from '../Atoms/addIcon'
import NewButton from '../Atoms/button'
import NewTextField from '../Atoms/textField'
import SwitchLabel from '../Atoms/switchControl'
import ButtonAppBar from '../Molecules/appBar'


export default class Screen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      phone: '',
      EMail: '',
      password: '',
      pin: '',
      checked: true
    }
  }

  handleChange = name => e => {
    this.setState({[name]: e.target.value})
  }
  handleCheck = (e) => {
    this.setState({ checked: !this.state.checked })
  }

    render() {
      const { name, phone, EMail, password, pin, checked } = this.state

        return (
          <div>
            <ButtonAppBar />

            <div style={{ marginBottom: '10px' }} >
            <ImageAvatar />
            <AddIcon  />
            <h4>{this.state.name}</h4>
            </div>

            <div style={{ display: "flex", flexDirection: 'column', marginBottom: '20px' }} >
              <NewTextField id="name" label="Name" 
                name="name"
                value={name}
                onChange={this.handleChange('name')}
                margin="normal"
                focus={true}
                color="white" />
              <NewTextField id="phone" label="Phone"
                name="phone" 
                value={phone}
                onChange={this.handleChange('phone')}
                margin="normal"
                color="white" />
              <NewTextField id="EMail" label="E-Mail" 
                name="email"
                value={EMail}
                onChange={this.handleChange('EMail')}
                margin="normal"
                color="white" />
              <NewTextField id="password" label="Password" 
                name="password"
                value={password}
                onChange={this.handleChange('password')}
                margin="normal"
                color="white" />
              <NewTextField id="pin" label="PIN" 
                name="pin"
                value={pin}
                onChange={this.handleChange('pin')}
                margin="normal"
                color="white" />
              <SwitchLabel 
                checked={checked}
                value={checked}
                color="primary"
                onChange={this.handleCheck}
              />
            </div>

            <div>
              
            <NewButton textLabel='Cancel' variant="contained" color='secondary' />  
            <NewButton textLabel='Save' variant="contained" color='primary' />      
            </div>
          </div>
        )
    }
}