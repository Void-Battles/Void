import React from "react";
import { Link } from "react-router-dom";
import {
  RankContainer,
  RankContent,
  TeamRepContainer,
  ViewRatingsButton,
  TeamRepContent
} from "../Profile/ProfileStyles";
import TeamRoaster from "./TeamRoster";
import { RosterContent, PlayerContainer } from "./TeamStyles";

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
                      : ""
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
            {this.props.members ? (
              <React.Fragment>
                {this.props.members.map((teammate, key) => (
                  <TeamProfile
                    vb_username={teammate.vb_username}
                    profile_pic={teammate.profile_pic}
                    key={key}
                  />
                ))}
                <EmptyButton length={this.props.members.length} />
              </React.Fragment>
            ) : <EmptyButton length={0} />}

            {/* {this.props.members.length ?
          <React.Fragment>
            this.props.members.map(({vb_username, profile_pic}, profileIndex) => {
              return
              
              </React.Fragment>
            }) : 
            Array(this.props.members.length ? this.props.members.length - 4 : 4).fill().map(position => <img 
              src={require('../../resources/add-user-button.svg')} 
              alt="" 
              style={{height: '70%', border: '1px solid black', padding: '10px'}}
            />)}
            </section> */}
          </section>
        </RosterContent>
      </RankContainer>
    );
  }
}

const EmptyButton = ({length}) => Array(
  4 - length
)
  .fill()
  .map(position => (
    <img
    key={position}
      src={require("../../resources/add-user-button.svg")}
      alt=""
      style={{
        height: "70%",
        border: "1px solid black",
        padding: "10px"
      }}
    />
  ))

const TeamProfile = ({ vb_username, key, profile_pic }) => (
  <Link to={`/vb-profile/${vb_username}`} key={key} style={{ height: "100%" }}>
    <img
      src={require(`../../resources/survivors/${profile_pic}.png`)}
      alt=""
      style={{ height: "80%" }}
    />
    <h1>{vb_username}</h1>
  </Link>
);

export default TeamRanks;
