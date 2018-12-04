import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Context } from '../ContextAPI'
import { logInUser, logOutUser } from '.././ducks/reducer'
import axios from 'axios'
import styled from 'styled-components'

let AuthenticatingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #383838;
`

export function Authentication(Component) {
  return props => (
    <Context.Consumer>
      {context => (
        <Authenticate context={context} {...props} component={Component} />
      )}
    </Context.Consumer>
  )
}

class Authenticate extends React.Component {
  constructor(props) {
    super(props)

    this.Component = props.component
    this.state = {
      AuthenticateJSX: <AuthenticatingContainer />
    }
  }

  componentWillMount() {
    let auth_token = localStorage.getItem('auth_token')
    if (auth_token) {
      axios
        .get(`http://localhost:4000/authenticateAuthToken/${auth_token}`)
        .then(response => {
          if (response.data.error) {
            this.logOutUser()
          } else {
            this.props.context.logInUser(response.data.userData)
          }
        })
    } else this.logOutUser()
  }

  logOutUser = () => {
    this.props.context.logOutUser()
    alert('You must be signed in!')
    this.setState({
      AuthenticateJSX: <Redirect to="/login" />
    })
  }

  render() {
    let Component = this.Component
    if (this.props.context.state.isLoggedIn === true) {
      return <Component {...this.props} />
    } else {
      return this.state.AuthenticateJSX
    }
  }
}
