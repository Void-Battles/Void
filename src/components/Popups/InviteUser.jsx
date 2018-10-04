import React from "react";
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
import LogoIcon from "../../resources/VBLogov2.png";
import axios from 'axios'
import { backendURL } from '../../urls'

class InviteUser extends React.Component {
  state = { isHovering: false, userName: '', isLoading: false, didSend: false };

    handleSendInvite = () => {
        this.setState({ isLoading: true })
        axios.post(backendURL + '/api/invite/sendInvite/' + this.state.userName).then(data => {
            this.setState({ didSend: true })

            setTimeout(() => {
                this.props.handleClose()
            }, 1000)

        }).catch(error => {
            alert(error.response.data)
            this.setState({ isLoading: false, userName: '' })
        })
    }

  render() {
    return (
      <div
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          display: "flex",
          top: 0,
          left: 0,
          backgroundColor: "rgba(0,0,0,0.6)"
        }}
        onClick={() => !this.state.isHovering && this.props.handleClose()}
      >
        <Contents
          style={{
            margin: "auto",
            backgroundColor: "#2b2b2b",
            height: "350px",
            boxShadow:
              "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
          }}
          onMouseEnter={() => this.setState({ isHovering: true })}
          onMouseLeave={() => this.setState({ isHovering: false })}
        >
          <Header>
            INVITE A <PurpleText>TEAMMATE</PurpleText>
          </Header>

          <InputContainer>
            <InputTitle>
              ENTER THEIR <PurpleText>VB_USERNAME</PurpleText>
            </InputTitle>
            <Input
              value={this.state.userName}
              onChange={input =>
                this.setState({ userName: input.target.value })
              }
            />
            <InputError>{this.state.usernameError}</InputError>
          </InputContainer>

          <ButtonContainer>
            <HeroButton width="60%" onClick={this.createTeam} onClick={!this.state.isLoading && this.handleSendInvite}>
              {this.state.isLoading ? 'SENDING...' : 'INVITE'}
            </HeroButton>
            <InputError>{this.state.loginError}</InputError>
          </ButtonContainer>
          {this.state.didSend && <h1 style={{color: 'forestgreen', marginTop: 20, fontWeight: 'bolder'}}>INVITE SENT!</h1>}
        </Contents>
      </div>
    );
  }
}

export default InviteUser;
