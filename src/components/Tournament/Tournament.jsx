import React from "react";
import axios from "axios";
import { backendURL } from "../../urls";
import LEATHERFACE from "../../resources/LEATHERFACE.jpeg";
import FENG from "../../resources/survivors/feng.png";
import KATE from "../../resources/survivors/kate.png";
import MEG from "../../resources/survivors/meg.png";
import BILL from "../../resources/survivors/bill.png";
import {
  MapDescriptionContainer,
  MapPictureContainer,
  ImageContainer,
  KillerDescriptionContainer,
  SurvivorContainer
} from "./TournamentStyles";
import { Header, PurpleText, SubHeader } from "../../GlobalStyles";
import {
  Paragraph,
  InfoContainer,
  SignUpButton
} from "../Landing/LandingStyles";
import { FaSkull, FaPencilAlt, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TeamIconContainer, TeamIcon } from '../Profile/ProfileStyles'

class Tournament extends React.Component {
  state = {
    killer: "cannibal",
    survivors: [],
    map: "blood_lodge",
    tournament_name: ""
  };
  componentDidMount() {
    const { tournament_name } = this.props.match.params;
    if (tournament_name) {
      axios
        .get(backendURL + "/api/tournaments/findTournament/" + tournament_name)
        .then(response => {
          this.setState({ ...response.data });
        });
    }
  }
  render() {
    console.log(this.state);
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <ImageContainer
          map={require(`../../resources/maps/${this.state.map}.png`)}
          pos="bottom"
        >
          <h1
            style={{
              margin: "auto",
              fontSize: "44px",
              fontWeight: "bolder",
              color: "white",
              textTransform: "uppercase"
            }}
          >
            {this.state.tournament_name}
          </h1>
        </ImageContainer>

        <MapDescriptionContainer>
          <Header>
            <PurpleText>ABOUT </PurpleText>THIS COMPETITION
          </Header>
          <Paragraph width="600px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            volutpat leo quis lorem blandit faucibus. Aliquam erat volutpat.
            Suspendisse tincidunt, ante ut elementum laoreet, est nisl malesuada
            urna, quis vulputate augue lorem vehicula arcu. Nullam lacinia
            pellentesque ex, sit amet cursus ipsum mattis nec. Donec in orci vel
            arcu semper interdum.
          </Paragraph>

          <MapPictureContainer>
            <img
              width="400px"
              src="https://d1u5p3l4wpay3k.cloudfront.net/deadbydaylight_gamepedia_en/f/f6/IconMap_Ind_CoalTower.png?version=925bece217fb24b8ee259e57f361e03d"
              alt=""
            />
            <img
              width="300px"
              src="https://d1u5p3l4wpay3k.cloudfront.net/deadbydaylight_gamepedia_en/thumb/e/e2/CoalTower.jpg/1600px-CoalTower.jpg?version=ece6bb09314aa370b7c9af04da1538f8"
              alt=""
            />
          </MapPictureContainer>
        </MapDescriptionContainer>

        <ImageContainer
          pos="top"
          map={require(`../../resources/killers/${this.state.killer}.jpg`)}
        >
          <h1
            style={{
              margin: "auto",
              fontSize: "44px",
              fontWeight: "bolder",
              color: "white"
            }}
          >
            THE {this.state.killer.toUpperCase()}
          </h1>
        </ImageContainer>

        <KillerDescriptionContainer>
          <InfoContainer>
            <FaSkull size="30px" />
            <SubHeader primary>THEIR GOALS</SubHeader>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat leo quis lorem blandit faucibus. Aliquam erat volutpat.
            </Paragraph>
          </InfoContainer>

          <InfoContainer>
            <FaPencilAlt size="30px" />
            <SubHeader primary>KILLER RULES</SubHeader>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat leo quis lorem blandit faucibus. Aliquam erat volutpat.
            </Paragraph>
          </InfoContainer>

          <InfoContainer>
            <FaInfoCircle size="30px" />
            <SubHeader primary>MORE INFO</SubHeader>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat leo quis lorem blandit faucibus. Aliquam erat volutpat.
            </Paragraph>
          </InfoContainer>
        </KillerDescriptionContainer>

        <ImageContainer
          pos="top"
          map={require("../../resources/survivors/all_survivors.jpg")}
        >
          <h1
            style={{
              margin: "auto",
              fontSize: "44px",
              fontWeight: "bolder",
              color: "white"
            }}
          >
            SURVIVORS
          </h1>
        </ImageContainer>

        <KillerDescriptionContainer>
          {this.state.survivors.map(survivor => (
            <SurvivorContainer>
              <img
                src={require(`../../resources/survivors/${survivor}.png`)}
                alt=""
              />
              <h1>{survivor.toUpperCase()}</h1>
            </SurvivorContainer>
          ))}
        </KillerDescriptionContainer>

        <KillerDescriptionContainer style={{ backgroundColor: "#2b2b2b" }}>
          <InfoContainer>
            <FaSkull size="30px" />
            <SubHeader primary>THEIR GOALS</SubHeader>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat leo quis lorem blandit faucibus. Aliquam erat volutpat.
            </Paragraph>
          </InfoContainer>

          <InfoContainer>
            <FaPencilAlt size="30px" />
            <SubHeader primary>SURVIVOR RULES</SubHeader>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat leo quis lorem blandit faucibus. Aliquam erat volutpat.
            </Paragraph>
          </InfoContainer>

          <InfoContainer>
            <FaInfoCircle size="30px" />
            <SubHeader primary>MORE INFO</SubHeader>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat leo quis lorem blandit faucibus. Aliquam erat volutpat.
            </Paragraph>
          </InfoContainer>
        </KillerDescriptionContainer>

        <MapDescriptionContainer>
          <SubHeader>
            PARTICIPATE IN THIS <PurpleText>TOURNAMENT</PurpleText>
          </SubHeader>
          <Link to="/register" style={{ margin: "20px 0 20px 0" }}>
            <SignUpButton>REGISTER</SignUpButton>
          </Link>
        </MapDescriptionContainer>

        <KillerDescriptionContainer
          style={{ backgroundColor: "#2b2b2b", flexDirection: "column" }}
        >
          <SubHeader>
            REGISTERED <PurpleText>TEAMS</PurpleText>
          </SubHeader>
          {this.state.signed_up_teams &&
            this.state.signed_up_teams.map(team => (
            <TeamIconContainer>
              <Link
                to={`/vb-team/${team.team_name}`}
                style={{ height: "100%" }}
                key={team.team_name}
              >
                <TeamIcon
                  src={
                    team
                      ? require(`../../resources/team_icons/${
                          team.team_pic
                        }.png`)
                      : ""
                  }
                  alt=""
                />
                <h1 style={{ color: "white" }}>{team.team_name}</h1>
              </Link>
            </TeamIconContainer>
            ))}
        </KillerDescriptionContainer>
      </div>
    );
  }
}

export default Tournament;
