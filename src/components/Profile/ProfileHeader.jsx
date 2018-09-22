import React from "react";
import { Link } from "react-router-dom";
import UplayLogo from "../../resources/uplay-logo.png";
import AddFriendIcon from "../../resources/GreenAddFriend.png";
import MessageIcon from "../../resources/BlueMessage.png";
import InviteIcon from "../../resources/PurpleInvite.png";
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
} from "./ProfileStyles";

class ProfileHeader extends React.Component {
  render() {
    return (
      <ProfileBackgroundContainer>
        <ProfileContentsContainer>
          <div style={{ display: "flex" }}>
            <ProfilePicture
              src={
                this.props.profile_pic
                  ? require(`../../resources/survivors/${
                      this.props.profile_pic
                    }.png`)
                  : ""
              }
              alt=""
            />
            <ProfileContent>
              <UsernameContainer>
                <img
                  src={
                    "http://flaticons.net/gd/makefg.php?i=icons/Application/User-Profile.png&r=255&g=255&b=255"
                  }
                  alt=""
                />
                <h1 style={{ textTransform: "uppercase" }}>
                  {this.props.vb_username}
                </h1>
              </UsernameContainer>

              <UsernameContainer>
                <img src={UplayLogo} alt="" />
                <h2 style={{ textTransform: "uppercase" }}>
                  {this.props.email}
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
              {!this.props.team_id ? (
                <ProfileButton color="#7ED321" style={{ height: 80 }}>
                  <img src={AddFriendIcon} alt="" />
                  <h1>REGISTER</h1>
                </ProfileButton>
              ) : (
                <React.Fragment>
                  <TeamIcon
                    src={
                      "http://flaticons.net/gd/makefg.php?i=icons/Application/User-Profile.png&r=255&g=255&b=255"
                    }
                    alt=""
                  />
                  <h1>StaticVoid</h1>
                </React.Fragment>
              )}
            </TeamIconContainer>
          </Link>
        </ProfileContentsContainer>
      </ProfileBackgroundContainer>
    );
  }
}

export default ProfileHeader;
