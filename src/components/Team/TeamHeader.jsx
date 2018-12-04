import React from 'react'
import TeamNameIcon from '../../resources/team.png'
import RegionIcon from '../../resources/region.png'
import AddFriendIcon from '../../resources/GreenAddFriend.png'
import ReportIcon from '../../resources/report.png'
import InviteIcon from '../../resources/PurpleInvite.png'
import {
  ProfileBackgroundContainer,
  ProfileContentsContainer,
  ProfilePicture,
  ProfileContent,
  UsernameContainer,
  ProfileButtonsContainer,
  ProfileButton
} from '../Profile/ProfileStyles'

class TeamHeader extends React.Component {
  render() {
    return (
      <ProfileBackgroundContainer>
        <ProfileContentsContainer>
          <div style={{ display: 'flex' }}>
            {this.props.team_pic && (
              <ProfilePicture src={require(`../../resources/team_icons/${this.props.team_pic}.png`)} alt="" />
            )}

            <ProfileContent>
              <UsernameContainer>
                <img src={TeamNameIcon} alt="" />
                <h1>{this.props.team_name}</h1>
              </UsernameContainer>

              <UsernameContainer>
                <img src={RegionIcon} alt="" />
                <h2>United States</h2>
              </UsernameContainer>

              <ProfileButtonsContainer>
                <ProfileButton color="#7ED321">
                  <img src={AddFriendIcon} alt="" />
                  <h1>JOIN TEAM</h1>
                </ProfileButton>

                <ProfileButton color="#A031FF">
                  <img src={InviteIcon} alt="" />
                  <h1>SCRIMMAGE</h1>
                </ProfileButton>

                <ProfileButton color="#C20018">
                  <img src={ReportIcon} alt="" />
                  <h1>REPORT</h1>
                </ProfileButton>
              </ProfileButtonsContainer>
            </ProfileContent>
          </div>
        </ProfileContentsContainer>
      </ProfileBackgroundContainer>
    )
  }
}

export default TeamHeader
