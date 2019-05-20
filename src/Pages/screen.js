import React, { Component } from 'react'

import NewButton from '../Atoms/button'
import ImageAvatar from '../Atoms/avatar'

export default class Screen extends Component {


    render() {
        return (
          <div>
            <div style={{ marginBottom: '10px' }} >
            <ImageAvatar />
            </div>

            <div>
              
            <NewButton textLabel='Cancel' variant="contained" color='secondary' />  
            <NewButton textLabel='Save' variant="contained" color='primary' />      
            </div>
          </div>
        )
    }
}