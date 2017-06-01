import React, { Component } from 'react'
import 'semantic-ui-css/semantic.css'
import LoginForm from './LoginForm'
import { Container } from 'semantic-ui-react'
import logo from './../images/logo.png'

class App extends Component {
  render () {
    return (
      <Container className="App">
        <div><img src={logo} alt="eKreative"/></div>
        <LoginForm/>
      </Container>
    )
  }
}

export default App
