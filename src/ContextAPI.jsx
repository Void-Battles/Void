import React from 'react'

// Create the Shareable Context
export const Context = React.createContext()

// Provider Component
class MyProvider extends React.Component {
  constructor() {
    super()

    this.state = {
      isUserLoggedIn: false,
      userInfo: null,
      isLoggedIn: false,
      selectedTab: 'home',
      userData: {
        uplay: 'BrettlyC',
        vb_username: 'BrettlyClawfield'
      }
    }
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
    this.setState({ isUserLoggedIn: true, userInfo })
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
          updateTeams: this.updateTeams
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default MyProvider
