import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../../ContextAPI'
import { logInUser } from '../../ducks/reducer'
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
import { backendURL } from '../../urls'

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      vb_username: '',
      steam_id: '',
      email: '',
      password: '',
      usernameError: '',
      passwordError: '',
      registerError: ''
    }
  }

  componentDidMount() {
    this.props.setHeaderTab('login')
  }

  registerUser = () => {
    const { vb_username, steam_id, email, password } = this.state
    const userInfo = {
      vb_username,
      steam_id,
      email,
      password
    }
    axios
      .post(`${backendURL}/register_user`, userInfo)
      .then(response => {
        this.props.handleLogin(response.data)
      })
  }

  updateUserRegistration(property, value) {
    this.setState({
      [property]: value
    })
  }

  render() {
    if (this.props.isUserLoggedIn) {
      return <Redirect to="/my-profile" />
    } else
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
                <Input
                  value={this.state.vb_username}
                  onChange={input =>
                    this.updateUserRegistration(
                      'vb_username',
                      input.target.value
                    )
                  }
                />
                <InputError>{this.state.usernameError}</InputError>
              </InputContainer>

              <InputContainer>
                <InputTitle><PurpleText>STEAM</PurpleText> URL OR ID</InputTitle>
                <Input
                  value={this.state.uplay}
                  onChange={input =>
                    this.updateUserRegistration('steam_id', input.target.value)
                  }
                />
                <InputError>{this.state.usernameError}</InputError>
              </InputContainer>

              <InputContainer>
                <InputTitle>EMAIL</InputTitle>
                <Input
                  value={this.state.email}
                  onChange={input =>
                    this.updateUserRegistration('email', input.target.value)
                  }
                />
                <InputError>{this.state.usernameError}</InputError>
              </InputContainer>

              <InputContainer>
                <InputTitle>PASSWORD</InputTitle>
                <Input
                  type="password"
                  value={this.state.password}
                  onChange={input =>
                    this.updateUserRegistration('password', input.target.value)
                  }
                />
                <InputError>{this.state.passwordError}</InputError>
              </InputContainer>

              <ButtonContainer>
                <HeroButton onClick={this.registerUser} width="60%">
                  CREATE ACCOUNT
                </HeroButton>
                <InputError>{this.state.registerError}</InputError>
              </ButtonContainer>
            </Contents>
          </RegisterContainer>
        </PageContainer>
      )
  }
}

export default props => (
  <Context.Consumer>
    {context => <Register isUserLoggedIn={context.state.isUserLoggedIn} userInfo={context.state.userInfo} handleLogin={context.handleLogin} setHeaderTab={context.setHeaderTab} {...props} />}
  </Context.Consumer>
)
