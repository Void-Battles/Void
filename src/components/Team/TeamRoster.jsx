import React from 'react'
import { Link } from 'react-router-dom'
import { RosterContainer, RosterContent, PlayerContainer } from './TeamStyles'
import { ContainerTitle } from '../Profile/ProfileStyles'

class TeamRoster extends React.Component {
  render() {
    return (
      <RosterContainer>
        <ContainerTitle>ROSTER</ContainerTitle>

        <RosterContent>
          {this.props.members.length ?
            this.props.members.map(({vb_username, profile_pic}, profileIndex) => (
              <Link to={`/vb-profile/${vb_username}`} key={profileIndex}>
                <PlayerContainer>
                  <img
                    src={require(`../../resources/survivors/${profile_pic}.png`)}
                    alt=""
                  />
                  <h1>{vb_username}</h1>
                </PlayerContainer>
              </Link>
            )) : <PlayerContainer></PlayerContainer>}
        </RosterContent>
      </RosterContainer>
    )
  }
}

export default TeamRoster
