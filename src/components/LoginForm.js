import React from 'react'
import {Button, Form} from 'semantic-ui-react'

import './LoginForm.scss'

class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {username: '', password: ''}

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit (event) {
    console.log(this.state)
    event.preventDefault();
  }

  render () {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Username</label>
          <input name="username" value={this.state.username} onChange={this.handleChange} type="text"/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input name="password" value={this.state.password} onChange={this.handleChange} type="password"/>
        </Form.Field>
        <Button type="submit">Sign in</Button>
      </Form>
    )
  }
}

export default LoginForm
