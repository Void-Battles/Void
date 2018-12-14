import React, { Component } from "react";
import { PageContainer } from "../../GlobalStyles";
import ProfileHeader from "./ProfileHeader";
import ProfileRanks from "./PofileRanks";
import ProfileMatches from "./ProfileMatches";
import ProfileTournaments from "./ProfileTournaments";
import { Context } from "../../ContextAPI";
import axios from "axios";
import { backendURL } from "../../urls";
import { Redirect } from 'react-router-dom'

class Profile extends Component {
  state = {
    vb_username: "No Profile",
    email: "",
    profile_pic: "",
    team_id: null,
    shouldRedirect: false
  };

  componentDidMount() {
    this.props.setHeaderTab("profile");

    if (this.props.match.params.profile_name) {
      axios
        .get(`${backendURL}/api/vb-profile/${this.props.match.params.profile_name}`)
        .then(response => {
          this.setState({ ...response.data });
        }).catch(error => {
          this.setState({ shouldRedirect: true })
          alert(error.response.data)
        })
    } else if (this.props.isUserLoggedIn) {
      this.setState({ ...this.props.userInfo });
    }
  }

  render() {
    if(this.state.shouldRedirect) {
      return <Redirect to='/' />
    }
    return (
      <PageContainer>
        <ProfileHeader {...this.state} />

        <ProfileRanks />

        <ProfileMatches />

        <ProfileTournaments />
      </PageContainer>
    );
  }
}

export default props => (
  <Context.Consumer>
    {context => (
      <Profile
        setHeaderTab={context.setHeaderTab}
        isUserLoggedIn={context.state.isUserLoggedIn}
        userInfo={context.state.userInfo}
        {...props}
      />
    )}
  </Context.Consumer>
);
