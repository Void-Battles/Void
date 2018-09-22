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
} from "../Login/LoginStyles";
import {
  PageContainer,
  Header,
  PurpleText,
  HeroButton
} from "../../GlobalStyles";
import { backendURL } from '../../urls'

const generateSecret = (data) => new Buffer(data).toString('base64')

console.log(generateSecret('ass'))

class RegisterTeam extends Component {
  constructor() {
    super();
    this.state = {
      team_name: '',
      didCreate: false
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

  createTeam = () => {
      axios.post(`${backendURL}/create-team`, this.state, { headers: {'client-secret': this.props.authToken}}).then(response => {
        this.props.updateTeams(response.data)
        this.setState({ didCreate: true })
      })
  }

  render() {
    if (this.state.didCreate) return <Redirect to="/my-profile" />;
    return (
      <PageContainer>
        <LoginContainer>
          <Logo src={LogoIcon} alt="" />

          <Contents style={{height: '320px'}}>
            <Header>
              CREATE A <PurpleText>TEAM</PurpleText>
            </Header>

            <InputContainer>
              <InputTitle>
                ENTER YOUR <PurpleText>TEAM NAME</PurpleText>
              </InputTitle>
              <Input
                value={this.state.team_name}
                onChange={e =>
                  this.getUserLoginInput("team_name", e.target.value)
                }
              />
              <InputError>{this.state.usernameError}</InputError>
            </InputContainer>

            <ButtonContainer>
              <HeroButton width="60%" onClick={this.createTeam}>
                CREATE
              </HeroButton>
              <InputError>{this.state.loginError}</InputError>
            </ButtonContainer>
          </Contents>
        </LoginContainer>
      </PageContainer>
    );
  }
}

export default (props) => <Context.Consumer>
{context => context.state.isUserLoggedIn ? 
  <RegisterTeam
    handleLogin={context.handleLogin}
    setHeaderTab={context.setHeaderTab}
    isUserLoggedIn={context.state.isUserLoggedIn}
    updateTeams={context.updateTeams}
    authToken={context.state.userInfo.auth_token}
    {...props}
  /> : <Redirect to='/login' />
}
</Context.Consumer>
