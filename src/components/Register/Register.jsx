import React from 'react'
import { registerUser, login } from '../.././ducks/reducer'
import { connect } from 'react-redux'
import LogoIcon from '../../resources/VBLogov2.png'
import {
	RegisterContainer,
	Logo,
	Contents,
	InputContainer,
	InputTitle,
	InputError,
	Input,
	ButtonContainer
} from './RegisterStyles'
import {
	PageContainer,
	Header,
	PurpleText,
	HeroButton
} from '../../GlobalStyles'

class Register extends React.Component {
	constructor() {
		super()

		this.state = {
			vb_username: '',
			uplay: '',
			email: '',
			password: '',
			usernameError: '',
			passwordError: '',
			loginError: ''
		}
	}

	register = () => {
		let userInfo = {
			vb_username: this.state.vb_username,
			uplay: this.state.uplay,
			email: this.state.email,
			password: this.state.password
		}
		this.props.registerUser(userInfo)
	}

	updateUserRegistration (property, value){
		this.setState({
			[property]: value
		})
	}

	render() {
		return (
			<PageContainer>
				<RegisterContainer>
					<Logo src={LogoIcon} alt="" />

					<Contents>
						<Header style={{ letterSpacing: '2px' }}>
							START <PurpleText>COMPETING</PurpleText>
						</Header>

						<InputContainer>
							<InputTitle>
								<PurpleText>VOID_</PurpleText>BATTLES USERNAME
							</InputTitle>
							<Input onChange={(e) => this.updateUserRegistration('vb_username', e.target.value) }/>
							<InputError>{this.state.usernameError}</InputError>
						</InputContainer>

						<InputContainer>
							<InputTitle>UPLAY NICKNAME</InputTitle>
							<Input onChange={(e) => this.updateUserRegistration('uplay', e.target.value) } />
							<InputError>{this.state.usernameError}</InputError>
						</InputContainer>

						<InputContainer>
							<InputTitle>EMAIL</InputTitle>
							<Input onChange={(e) => this.updateUserRegistration('email', e.target.value) }/>
							<InputError>{this.state.usernameError}</InputError>
						</InputContainer>

						<InputContainer>
							<InputTitle>PASSWORD</InputTitle>
							<Input type="password" onChange={(e) => this.updateUserRegistration('password', e.target.value) } />
							<InputError>{this.state.passwordError}</InputError>
						</InputContainer>

						<ButtonContainer>
							<HeroButton onClick={this.register} width="60%">CREATE ACCOUNT</HeroButton>
							<InputError>{this.state.loginError}</InputError>
						</ButtonContainer>
					</Contents>
				</RegisterContainer>
			</PageContainer>
		)
	}
}

function mapStateToProps(state) {
	return {}
}

export default connect(mapStateToProps, { registerUser, login })(Register)
