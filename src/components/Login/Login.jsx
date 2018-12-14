import React, { Component } from "react";
import { Context } from "../../ContextAPI";
import LogoIcon from "../../resources/VBLogov2.png";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { logInUser } from "../.././ducks/reducer";
import {
  LoginContainer,
  Logo,
  Contents,
  InputContainer,
  InputTitle,
  InputError,
  Input,
  ButtonContainer
} from "./LoginStyles";
import {
  PageContainer,
  Header,
  PurpleText,
  HeroButton
} from "../../GlobalStyles";
import { backendURL } from '../../urls'


class Login extends Component {
  constructor() {
    super();
    this.state = {
      vb_username: "AnimeCon",
      password: "sadie",
      usernameError: "",
      passwordError: "",
      loginError: ""
    };
  }

  componentDidMount() {
    this.props.setHeaderTab("login");
  }

  getUserLoginInput(property, value) {
    this.setState({
      [property]: value
    });
  }

  Login = () => {
    const { vb_username, password } = this.state
    axios.get(`${backendURL}/api/login/${new Buffer(JSON.stringify({vb_username, password})).toString('base64')}`).then(response => {
      console.log('response here', response)
      this.props.handleLogin(response.data);
    }).catch((err) => alert(err.response.data))
  };

  render() {
    if (this.props.isUserLoggedIn) return <Redirect to="/my-profile" />;
    return (
      <PageContainer>
        <LoginContainer>
          <Logo src={LogoIcon} alt="" />

          <Contents>
            <Header>
              <PurpleText>COMPETITION</PurpleText> AWAITS
            </Header>

            <InputContainer>
              <InputTitle>
                <PurpleText>VOID_</PurpleText>BATTLES USERNAME
              </InputTitle>
              <Input
                value={this.state.vb_username}
                onChange={e =>
                  this.getUserLoginInput("vb_username", e.target.value)
                }
              />
              <InputError>{this.state.usernameError}</InputError>
            </InputContainer>

            <InputContainer>
              <InputTitle>PASSWORD</InputTitle>
              <Input
                value={this.state.password}
                type="password"
                onChange={e =>
                  this.getUserLoginInput("password", e.target.value)
                }
              />
              <InputError>{this.state.passwordError}</InputError>
            </InputContainer>

            <ButtonContainer>
              <HeroButton width="60%" onClick={this.Login}>
                LOGIN
              </HeroButton>
              <InputError>{this.state.loginError}</InputError>
            </ButtonContainer>
          </Contents>
          <h1 style={{ color: "white", marginTop: 20 }}>Need an Account?</h1>
          <Link to="/register">
            <HeroButton width="200px" style={{ marginTop: 10 }}>
              REGISTER
            </HeroButton>
          </Link>
        </LoginContainer>
      </PageContainer>
    );
  }
}

class ContextLogin extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {context => (
          <Login
            handleLogin={context.handleLogin}
            setHeaderTab={context.setHeaderTab}
            isUserLoggedIn={context.state.isUserLoggedIn}
            {...this.props}
          />
        )}
      </Context.Consumer>
    );
  }
}

export default ContextLogin;
