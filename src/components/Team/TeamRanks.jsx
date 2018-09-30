import React from 'react'
import { Link } from 'react-router-dom'
import {
  RankContainer,
  RankContent,
  TeamRepContainer,
  ViewRatingsButton,
  TeamRepContent
} from '../Profile/ProfileStyles'
import TeamRoaster from './TeamRoster'
import { RosterContent, PlayerContainer } from './TeamStyles'

class TeamRanks extends React.Component {
  render() {
    return (
      <RankContainer>
        <RankContent>
          <h1>TEAM LEADER</h1>
            {this.props.captain && (
          <Link to={`/vb-profile/${this.props.captain.vb_username}`}>
              <section>
                <img
                  src={
                    this.props.captain.profile_pic
                      ? require(`../../resources/survivors/${
                          this.props.captain.profile_pic
                        }.png`)
                      : ''
                  }
                  alt=""
                />
                <h1>{this.props.captain.vb_username}</h1>
              </section>
          </Link>
            )}
        </RankContent>

         <RosterContent>
          <h1>TEAM MEMBERS</h1>
          <section>
          {this.props.members.length ?
            this.props.members.map(({vb_username, profile_pic}, profileIndex) => (
              <Link to={`/vb-profile/${vb_username}`} key={profileIndex} style={{height: '100%'}}>
                  <img
                    src={require(`../../resources/survivors/${profile_pic}.png`)}
                    alt=""
                    style={{height: '80%'}}
                  />
                  <h1>{vb_username}</h1>
              </Link>
            )) : <h1>Nothing Here...</h1>}
            </section>

        </RosterContent>

        {/* <TeamRoaster members={this.props.members}/> */}

        {/* <RankContent>
          <h1>TEAM RANK</h1>
          <section>
            <img
              src="https://rbgboost.net/wp-content/uploads/2017/10/gold4.png"
              alt=""
            />
          </section>
        </RankContent>

        <TeamRepContainer>
          <h1>TEAM REPUTATION</h1>
          <TeamRepContent rep="90%">
            <section>
              <h1>90%</h1>
              <div />
            </section>
            <ViewRatingsButton>VIEW RATINGS</ViewRatingsButton>
          </TeamRepContent>
        </TeamRepContainer> */}
      </RankContainer>
    )
  }
}

export default TeamRanks
