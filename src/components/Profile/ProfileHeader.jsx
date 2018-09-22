import React from 'react'
import { Link } from 'react-router-dom'
import UplayLogo from '../../resources/uplay-logo.png'
import AddFriendIcon from '../../resources/GreenAddFriend.png'
import MessageIcon from '../../resources/BlueMessage.png'
import InviteIcon from '../../resources/PurpleInvite.png'
import {
  ProfileBackgroundContainer,
  ProfileContentsContainer,
  ProfilePicture,
  ProfileContent,
  UsernameContainer,
  ProfileButtonsContainer,
  ProfileButton,
  TeamIconContainer,
  TeamIcon
} from './ProfileStyles'

class ProfileHeader extends React.Component {
  render() {
    console.log(this.props)
    const { vb_username, email, profile_pic, team_id } = this.props
    return (
      <ProfileBackgroundContainer>
        <ProfileContentsContainer>
          <div style={{ display: 'flex' }}>
            <ProfilePicture
              src={
                profile_pic
                  ? require(`../../resources/survivors/${profile_pic}.png`)
                  : ''
              }
              alt=""
            />
            <ProfileContent>
              <UsernameContainer>
                <img
                  src={
                    'http://flaticons.net/gd/makefg.php?i=icons/Application/User-Profile.png&r=255&g=255&b=255'
                  }
                  alt=""
                />
                <h1 style={{ textTransform: 'uppercase' }}>
                  {vb_username}
                </h1>
              </UsernameContainer>

              <UsernameContainer>
                <img src={UplayLogo} alt="" />
                <h2 style={{ textTransform: 'uppercase' }}>
                  {email}
                </h2>
              </UsernameContainer>

              <ProfileButtonsContainer>
                <ProfileButton color="#7ED321">
                  <img src={AddFriendIcon} alt="" />
                  <h1>ADD FRIEND</h1>
                </ProfileButton>

                <ProfileButton color="#4A90E2">
                  <img src={MessageIcon} alt="" />
                  <h1>MESSAGE</h1>
                </ProfileButton>

                <ProfileButton color="#A031FF">
                  <img src={InviteIcon} alt="" />
                  <h1>TEAM INVITE</h1>
                </ProfileButton>
              </ProfileButtonsContainer>
            </ProfileContent>
          </div>
          <Link to="/vb-teams/BrettlyC">
            <TeamIconContainer>
              {!team_id ? (
                <ProfileButton color="#7ED321" style={{ height: 80 }}>
                  <img src={AddFriendIcon} alt="" />
                  <h1>REGISTER</h1>
                </ProfileButton>
              ) : (
                <Link to="/my-profile">
                  <TeamIcon
                    src={
                      'https://cdn-eslgaming.akamaized.net/play/eslgfx/gfx/logos/teams/12125000/12125408_medium.jpg'
                    }
                    alt=""
                  />
                  <h1>{team_id.team_name}</h1>
                </Link>
              )}
            </TeamIconContainer>
          </Link>
        </ProfileContentsContainer>
      </ProfileBackgroundContainer>
    )
  }
}

export default ProfileHeader
