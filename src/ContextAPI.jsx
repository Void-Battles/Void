import React from 'react'
import axios from 'axios'
import { backendURL } from './urls'
// Create the Shareable Context
export const Context = React.createContext()

// Provider Component
class MyProvider extends React.Component {
  constructor() {
    super()

    this.state = {
      isUserLoggedIn: false,
      isAdminLoggedIn: false,
      userInfo: {},
      isLoggedIn: false,
      selectedTab: 'home',
      userData: {
        uplay: 'BrettlyC',
        vb_username: 'BrettlyClawfield'
      }
    }
  }

  componentDidMount() {
    setInterval(() => {
      if(this.state.isUserLoggedIn) {
        this.getPendingInvites()
      }
    }, 30000)
  }

  getPendingInvites = () => {
    axios.get(backendURL + '/api/invite/getPendingInvites').then(response => {
      const { userInfo } = this.state
      userInfo.pending_invites = response.data
      this.setState({ userInfo })
    })
  }

  logInUser = (userData, token) => {
    if (token) localStorage.setItem('auth_token', token)
    this.setState({
      isLoggedIn: true,
      userData
    })
  }

  logOutUser = () => {
    localStorage.removeItem('auth_token')
    this.setState({
      isLoggedIn: false,
      userData: {}
    })
  }

  handleLogin = (userInfo) => {
    axios.defaults.headers.common['token'] = userInfo.auth_token;
    localStorage.setItem('userInfo', userInfo)
    this.setState({ isUserLoggedIn: true, userInfo })
  }

  handleAdminLogin = (adminInfo) => {
    axios.defaults.headers.common['token'] = adminInfo.auth_token;
    localStorage.setItem('adminInfo', adminInfo)
    this.setState({ isAdminLoggedIn: true, adminInfo })
  }

  updateTeams = (teamObj) => {
    const { userInfo } = this.state
    userInfo.team_id = teamObj
    this.setState({ userInfo })
  }

  setHeaderTab = tab => {
    // const tempArray = this.state.selectedTab.slice(0)
    // for (let i = 0; i < tempArray.length; i++) {
    //   if (tab === i) {
    //     tempArray[i] = true
    //   } else {
    //     tempArray[i] = false
    //   }
    // }
    // this.setState({
    //   selectedTab: tempArray
    // })
    this.setState({ selectedTab: tab })
  }

  render() {
    console.log(this.state)
    return (
      <Context.Provider
        value={{
          state: this.state,
          logInUser: this.logInUser,
          logOutUser: this.logOutUser,
          setHeaderTab: this.setHeaderTab,
          handleLogin: this.handleLogin,
          handleAdminLogin: this.handleAdminLogin,
          updateTeams: this.updateTeams,
          getPendingInvites: this.getPendingInvites
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default MyProvider
