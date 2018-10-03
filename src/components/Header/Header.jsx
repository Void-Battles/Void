import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Context } from '../../ContextAPI'
import { HeaderContainer, NavContainer, NavOptions, BellIcon, NotificationBox, TeamContainer } from './HeaderStyles'
import { LogoContainer } from '../../GlobalStyles'
import { Link } from 'react-router-dom'
import { logInUser, logOutUser } from '../../ducks/reducer'
import { backendURL } from '../../urls'

class Header extends React.Component {
  state = {
    showNotifications: false
  }

  handleAccept(invite_id) {
    console.log(invite_id)
    axios.post(`${backendURL}/api/invite/acceptInvite/${invite_id}`, null, {
      headers: { 'token': this.props.userInfo.auth_token }
    }).then((response) => console.log(response))
  }

  render() {
    const { selectedTab, isUserLoggedIn, handleLogin } = this.props

    return (
      <HeaderContainer>
        <Link to="/" style={{ width: '30%' }}>
          <LogoContainer>
            <h1>VOID_</h1>
            <h2>BATTLES</h2>
          </LogoContainer>
        </Link>

        {isUserLoggedIn ? (
          <NavContainer>
            <Link to={'/home'} style={{ height: '100%' }}>
              <NavOptions selected={selectedTab === 'tournaments'}>
                TOURNAMENTS
              </NavOptions>
            </Link>
            {this.props.doesUserHaveTeam ? <Link to={`/vb-team/${this.props.userInfo.team_id.team_name}`} style={{ height: '100%' }}>
              <NavOptions selected={selectedTab === 'my-team'}>
                MY TEAM
              </NavOptions>
            </Link> :
            <Link to={'/register-team'} style={{ height: '100%' }}>
              <NavOptions selected={selectedTab === 'register-team'}>
                CREATE TEAM
              </NavOptions>
            </Link>}
            <Link to={'/login'} style={{ height: '100%' }}>
              <NavOptions selected={selectedTab === 'profile'}>
                MY PROFILE
              </NavOptions>
            </Link>
            <NavOptions><BellIcon src={require('../../resources/bell-icon.svg')} onClick={() => this.setState({ showNotifications: !this.state.showNotifications })}></BellIcon></NavOptions>
          </NavContainer>
        ) : (
          <NavContainer>
            <Link to={'/home'} style={{ height: '100%' }}>
              <NavOptions selected={selectedTab === 'tournaments'}>TOURNAMENTS</NavOptions>
            </Link>
            <Link to={'/vb-teams'} style={{ height: '100%' }}>
              <NavOptions selected={selectedTab === 'find-team'}>
                FIND TEAM
              </NavOptions>
            </Link>
            <Link to={'/login'} style={{ height: '100%' }}>
              <NavOptions selected={selectedTab === 'login'}>LOGIN</NavOptions>
            </Link>
          </NavContainer>
        )}
        { this.state.showNotifications && <NotificationBox>
          { this.props.userInfo.pending_invites.map(invite => {
            return <TeamContainer>
            <section>
              <img src={require(`../../resources/team_icons/${invite.team_info.team_pic}.png`)}></img>
              <h1>{ invite.team_info.team_name }</h1>
            </section>
            <section style={{ justifyContent: "space-between" }}>
              <button style={{ backgroundColor: "forestgreen", color: "white", fontWeight: "bolder" }} onClick={() => this.handleAccept(invite.invite_id) }>Accept</button>
              <button style={{ backgroundColor: "red", color: "white", fontWeight: "lighter" }}>Deny</button>
            </section>
          </TeamContainer>
          })}

        </NotificationBox> }
      </HeaderContainer>
    )
  }
}

export default () => (
  <Context.Consumer>
    {context => (
      <Header selectedTab={context.state.selectedTab} isUserLoggedIn={context.state.isUserLoggedIn} doesUserHaveTeam={context.state.isUserLoggedIn ? context.state.userInfo.team_id : false} userInfo={context.state.userInfo}/>
    )}
  </Context.Consumer>
)
