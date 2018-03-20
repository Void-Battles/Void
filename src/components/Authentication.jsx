import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { logInUser, logOutUser } from '.././ducks/reducer'
import axios from 'axios'
import styled from 'styled-components'

let AuthenticatingContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #383838;
`

export function Authentication(Component) {
	class Authenticate extends React.Component {
		constructor() {
			super()

			this.state = {
				AuthenticateJSX: <AuthenticatingContainer />
			}
		}

		componentWillMount() {
				axios.get(`http://localhost:4000/authenticateAuthToken/${localStorage.getItem('auth_token')}`).then(response => {
					if (response.data.error) {
						this.setState({
							AuthenticateJSX: <Redirect to='/login' />
						})
						this.props.logOutUser()
						alert('You must be signed in!')
					} else {
						console.log(response.data.userData, 'alksdfjalksdjf')
						this.props.logInUser(response.data.userData)
					}
				})
		}

		render() {
			if (this.props.loggedInStatus) {
				return <Component {...this.props} />
			} else if (!this.props.loggedInStatus) {
				return this.state.AuthenticateJSX
			} else return <Redirect to='/' />
		}
	}
	function mapStateToProps(state) {
		return {
			loggedInStatus: state.loggedInStatus
		}
	}

	return connect(mapStateToProps, { logInUser, logOutUser })(Authenticate)
}
