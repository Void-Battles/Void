import React, { Component } from "react";
import { Context } from "../../ContextAPI";
import LogoIcon from "../../resources/VBLogov2.png";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { logInUser } from "../.././ducks/reducer";
import {
  PageContainer,
  Header,
  PurpleText,
  HeroButton
} from "../../GlobalStyles";
import {
    LoginContainer,
    Logo,
    Contents,
    InputContainer,
    InputTitle,
    InputError,
    Input,
    ButtonContainer
} from "./AdminLoginStyles";

import { backendURL } from '../../urls'

class AdminLogin extends Component {
    state = {
        vb_username: "admin_Jack",
        password: "Fred1015",
        usernameError: "",
        passwordError: "",
        loginError: "",
        redirect: false
      };
    
    componentDidMount() {
        this.props.setHeaderTab("Admin Login");
      }
    
      getUserLoginInput(property, value) {
        this.setState({
          [property]: value
        });
      }
    
      Login = async () => {
        const { vb_username, password } = this.state
        try {
            let adminLogin = await axios.get(`${backendURL}/admin_login/admin/${new Buffer(JSON.stringify({vb_username, password})).toString('base64')}`);
            if(adminLogin.data) {
                this.props.handleAdminLogin(adminLogin);
            }
        } catch(err) {
          alert('Nice Try Buddy')
        }
      };
    
      render() {
        if (this.props.isAdminLoggedIn) return <Redirect to="admin_console" />;
        return (
          <PageContainer>
            <LoginContainer>
              <Logo src={LogoIcon} alt="" />
    
              <Contents>
                <Header>
                  <PurpleText>ADMIN</PurpleText> LOGIN
                </Header>
    
                <InputContainer>
                  <InputTitle>
                    <PurpleText>ADMIN</PurpleText> USERNAME
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
                  <InputTitle><PurpleText>ADMIN</PurpleText> PASSWORD</InputTitle>
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

              <h1 style={{ color: "white", marginTop: 20 }}>Not an Admin?</h1>
              <Link to="/register">
                <HeroButton width="200px" style={{ marginTop: 10 }}>
                  Go To Player Login
                </HeroButton>
              </Link>
            </LoginContainer>
          </PageContainer>
        );
      }
    }
    

export default props =><Context.Consumer>
{context => (
  <AdminLogin
    setHeaderTab={context.setHeaderTab}
    isAdminLoggedIn={context.state.isAdminLoggedIn}
    handleAdminLogin={context.handleAdminLogin}
    {...props}
  />
)}
</Context.Consumer> 


