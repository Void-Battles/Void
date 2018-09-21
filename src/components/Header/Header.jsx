import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Context } from '../../ContextAPI'
import { HeaderContainer, NavContainer, NavOptions } from './HeaderStyles'
import { LogoContainer } from '../../GlobalStyles'
import { Link } from 'react-router-dom'
import { logInUser, logOutUser } from '../../ducks/reducer'

class Header extends React.Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   headerLinks: ['/', '/vb-teams', '/players', '/register', '/login'],
    //   headerPages: ['HOME', 'TEAMS', 'PLAYERS', 'REGISTER', 'LOGIN']
    // }
  }

  // alterOptions = (index, context) => {
  //   context.setHeaderTab(index)
  // }

  // renderTabs = (links, pages, context) => {
  //   const headerOptions = []

  //   for (let i = 0; i <= 5; i++) {
  //     headerOptions.push(
  //       <Link to={links[i]} style={{ height: '100%' }} key={i}>
  //         <NavOptions
  //           selected={context.state.selectedTab[i]}
  //           onClick={() => this.alterOptions(i, context)}
  //         >
  //           {pages[i]}
  //         </NavOptions>
  //       </Link>
  //     )
  //     if (headerOptions.length === 5) {
  //       return headerOptions.map(option => {
  //         return option
  //       })
  //     }
  //   }
  // }

  render() {
    // let context = this.props.context
    // let loggedInHeaderLinks = [
    //   '/compete/open-scrimmages',
    //   '/find-players',
    //   `/vb-teams/${context.state.userData.uplay}`,
    //   `/vb-profile/${context.state.userData.vb_username}`,
    //   '/logout'
    // ]
    // let loggedInHeaderPages = [
    //   'COMPETE',
    //   'FIND PLAYERS',
    //   'MY TEAM',
    //   'MY PROFILE',
    //   'LOGOUT'
    // ]
    // let notLoggedInHeaderLinks = [
    //   '/',
    //   '/vb-teams',
    //   '/players',
    //   '/register',
    //   '/login'
    // ]
    // let notLoggedInHeaderPages = [
    //   'HOME',
    //   'TEAMS',
    //   'PLAYERS',
    //   'REGISTER',
    //   'LOGIN'
    // ]

    // let headerLinks
    // let headerPages

    // if (context.state.isLoggedIn) {
    //   headerLinks = loggedInHeaderLinks
    //   headerPages = loggedInHeaderPages
    // } else {
    //   headerLinks = notLoggedInHeaderLinks
    //   headerPages = notLoggedInHeaderPages
    // }

    return (
      <HeaderContainer>
        <Link to='/' style={{width: '30%'}}>
        <LogoContainer>
          <h1>VOID_</h1>
          <h2>BATTLES</h2>
        </LogoContainer>
        </Link>

        <NavContainer>
          <Link to={''} style={{ height: '100%' }}>
            <NavOptions selected={true}>HOME</NavOptions>
          </Link>
          <Link to={''} style={{ height: '100%' }}>
            <NavOptions selected={false}>TOURNAMENTS</NavOptions>
          </Link>
          <Link to={''} style={{ height: '100%' }}>
            <NavOptions selected={false}>LOGIN</NavOptions>
          </Link>
        </NavContainer>
      </HeaderContainer>
    )
  }
}

class ContextHeader extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {context => <Header context={context} {...this.props} />}
        {/* {context => console.log(context.state)} */}
      </Context.Consumer>
    )
  }
}

export default ContextHeader
