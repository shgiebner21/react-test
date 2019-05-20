import React, { Component } from 'react'

import ImageCard from '../Molecules/imageCard'
import NewButton from '../Atoms/button'
import NewTextField from '../Atoms/textField'
import SwitchLabel from '../Atoms/switchControl'


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
  onCancel = () => {
    this.setState({ name: '', phone: '', EMail: '', password: '', pin: '', checked: true })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('JSON data looks like; ', JSON.stringify(this.state))

    fetch('http://projects.codeandtrust.com/api/user/create', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(this.state)
    })
    .then(resp => resp.json())
    .then(data => console.log('data is, ', data))
  }

    render() {
      const { name, phone, EMail, password, pin, checked } = this.state

        return (
          <div>

            <div style={{ marginBottom: '10px' }} >
            <ImageCard />
            <h4 style={{ color: 'black', textAlign: 'center' }} >{this.state.name}</h4>
            </div>

            <form>
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

              <NewButton textLabel='Cancel' variant="contained" 
                onClick={this.onCancel}
                color='secondary' />  
              <NewButton textLabel='Save' variant="contained" 
                onClick={this.handleSubmit}
                color='primary' />      

            </form>
          </div>
        )
    }
}