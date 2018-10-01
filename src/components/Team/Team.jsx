import React from 'react'
import { PageContainer } from '../../GlobalStyles'
import TeamHeader from './TeamHeader'
import TeamRanks from './TeamRanks'
import TeamRoster from './TeamRoster'
import TeamMatches from './TeamMatches'
import TeamTournaments from './TeamTournaments'
import { Context } from '../../ContextAPI'
import { backendURL } from '../../urls'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

class Team extends React.Component {
  constructor() {
    super()

    this.state = {
        team_name: '',
        team_pic: null,
        captain: null,
        members: null,
        shouldRedirect: false
    }
  }

  componentDidMount() {
    if (this.props.match.params.team_name) {
        axios.get(`${backendURL}/api/team/vb_team/${this.props.match.params.team_name}`).then(response => {
            const { team_name, captain, members, team_pic } = response.data
            this.setState({ captain, team_name, members, team_pic })
        }).catch(error => {
          alert(error.response.data)
          this.setState({ shouldRedirect: true })
        })
    } else {
      alert('Your team')
    }
    this.props.setHeaderTab('my-team')
  }

  render() {
    if (this.state.shouldRedirect) return <Redirect to='/' />
    return (
      <PageContainer>
        <TeamHeader team_name={this.state.team_name} team_pic={this.state.team_pic} />
        <TeamRanks captain={this.state.captain} members={this.state.members} />
        {/* <TeamRoster members={this.state.members} /> */}
        <TeamMatches />
        <TeamTournaments />
      </PageContainer>
    )
  }
}

export default props => (
  <Context.Consumer>
    {context => (
      <Team
        setHeaderTab={context.setHeaderTab}
        team_id={
          context.state.isUserLoggedIn ? context.state.userInfo.team_id : null
        }
        profile_pic={
          context.state.isUserLoggedIn ? context.state.userInfo.team_id : null
        }
        {...props}
      />
    )}
  </Context.Consumer>
)
