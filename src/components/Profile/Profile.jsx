import React, { Component } from 'react'
import { PageContainer } from '../../GlobalStyles'
import ProfileHeader from './ProfileHeader'
import ProfileRanks from './PofileRanks'
import ProfileMatches from './ProfileMatches'
import ProfileTournaments from './ProfileTournaments'
import { Context } from '../../ContextAPI'
import axios from 'axios'
import { backendURL } from '../../urls'

class Profile extends Component {

  state = { vb_username: 'loading...' }

  componentDidMount() {
    this.props.setHeaderTab('profile')

    if (this.props.match.params.profile_id) {
      axios.get(`${backendURL}/vb-profile/${this.props.match.params.profile_id}`).then(response => {
        this.setState({...response.data})
      })
    } else if(this.props.isUserLoggedIn) {
      this.setState({...this.props.userInfo})
    }
  }

  render() {
    return (
      <PageContainer>
        <ProfileHeader vb_username={this.state.vb_username} email={this.state.email} profile_pic={this.state.profile_pic} />

        <ProfileRanks />

        <ProfileMatches />

        <ProfileTournaments />
      </PageContainer>
    )
  }
}

export default (props) => <Context.Consumer>{context => <Profile setHeaderTab={context.setHeaderTab} isUserLoggedIn={context.state.isUserLoggedIn} userInfo={context.state.userInfo} {...props}/>}</Context.Consumer>
