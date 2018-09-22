import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Context } from '../../ContextAPI'
import { HeaderContainer, NavContainer, NavOptions } from './HeaderStyles'
import { LogoContainer } from '../../GlobalStyles'
import { Link } from 'react-router-dom'
import { logInUser, logOutUser } from '../../ducks/reducer'

class Header extends React.Component {
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
              <NavOptions selected={selectedTab === 'my-team'}>
                TOURNAMENTS
              </NavOptions>
            </Link>
            <Link to={'/register-team'} style={{ height: '100%' }}>
              <NavOptions selected={selectedTab === 'tournaments'}>
                MY TEAM
              </NavOptions>
            </Link>
            <Link to={'/login'} style={{ height: '100%' }}>
              <NavOptions selected={selectedTab === 'profile'}>
                MY PROFILE
              </NavOptions>
            </Link>
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
      </HeaderContainer>
    )
  }
}

export default () => (
  <Context.Consumer>
    {context => (
      <Header selectedTab={context.state.selectedTab} isUserLoggedIn={context.state.isUserLoggedIn} />
    )}
  </Context.Consumer>
)
