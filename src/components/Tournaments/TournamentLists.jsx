import React from "react";
import axios from "axios";
import { backendURL } from "../../urls";
import { Link } from "react-router-dom";
import { Context } from "../../ContextAPI";
import { FaCheckCircle } from "react-icons/fa";

class TournamentLists extends React.Component {
  state = { tournaments: null, registeredTournament: null };
  async componentDidMount() {
    const response = await axios.get(
      backendURL + "/api/tournaments/getTournaments/current"
    );
    this.setState({ tournaments: response.data });

    // if(this.props.isUserLoggedIn) {
    //   if(this.props.team_id.team_name) {
    //     this.setState({ registeredTournament: this.props.team_id.team_name })
    //   }
    // }
  }

  handleRegisterTeam = async tournament_name => {
    // TeamId, TournamentId
    const data = {
      tournament_name
    };
    const response = await axios
      .post(backendURL + "/api/tournaments/register", data)
      .catch(err => {
        return alert(err.response.data);
      });
    if (response) {
      let { tournaments } = this.state;
      if(response.data.added) {
      tournaments.map(tournament => {
        if (tournament.tournament_name === tournament_name) {
          tournament.signed_up_teams.push({
            team_name: this.props.team_id.team_name
          });
        }
      });
    } else if(response.data.removed) {
      tournaments.map(tournament => {
          tournament.signed_up_teams = tournament.signed_up_teams.filter(team => team.team_name !== this.props.team_id.team_name);
      });
    }
    console.log(tournaments)
      this.setState({ tournaments });
    }
  };

  checkIsRegistered = signed_up_teams => {
    let isSignedUp = false;
    signed_up_teams.map(team => {
      if (team.team_name === this.props.team_id.team_name) {
        isSignedUp = true;
      }
    });
    return isSignedUp;
  };

  render() {
    const { tournaments } = this.state;
    console.log(tournaments)
    return (
      <div
        style={{
          width: "100%",
          minHeight: 600,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#262626"
        }}
      >
        {tournaments &&
          tournaments.map(tournament => {
            // const isJoined = tournament.signed_up_teams.filter(team => team.team_name === 'ass')
            const image = require(`../../resources/maps/${tournament.map}.png`);
            const backgroundStyle = {
              background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${image})`,
              backgroundSize: "cover"
            };
            return (
              <div
                style={{ ...styles.tournamentContainer, ...backgroundStyle }}
                className="tournament_hover"
              >
                <Link
                  to={"/vb-tournament/" + tournament.tournament_name}
                  style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "50%"
                    }}
                    className="title_hover"
                  >
                    <h1 style={styles.title}>{tournament.tournament_name}</h1>
                    <h1
                      style={{
                        textAlign: "center",
                        color: "cornflowerblue",
                        fontWeight: "lighter",
                        marginTop: 10
                      }}
                    >
                      STARTS IN 2 DAY(S)
                    </h1>
                  </div>

                  <section style={styles.tournament_icons}>
                    <img
                      style={styles.killer_icon}
                      src={require(`../../resources/killers/the_${
                        tournament.killer
                      }.png`)}
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        width: "70%"
                      }}
                    >
                      {tournament.survivors.map(survivor => (
                        <img
                          style={styles.survivor_icons}
                          src={require(`../../resources/survivors/${survivor}.png`)}
                        />
                      ))}
                    </div>
                  </section>
                </Link>
                <h1
                  style={{
                    color: "darkgray",
                    fontWeight: "lighter",
                    textAlign: "center"
                  }}
                >
                  {tournament.signed_up_teams.length} SIGNED UP
                </h1>

                <section
                  style={styles.footer}
                  onClick={() =>
                    this.handleRegisterTeam(tournament.tournament_name)
                  }
                  className="register_button"
                >
                  {this.props.isUserLoggedIn ? (
                    this.checkIsRegistered(tournament.signed_up_teams) ? (
                      <h1 style={{ margin: "auto", color: "limegreen", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <FaCheckCircle size="22px" style={{marginRight: 5}} />
                        REGISTERED
                      </h1>
                    ) : (
                      <h1 style={{ margin: "auto", color: "#9c32f7" }}>
                        REGISTER
                      </h1>
                    )
                  ) : (
                    <Link
                      to="/login"
                      style={{ margin: "auto", color: "#9c32f7" }}
                    >
                      LOGIN TO PARTICIPATE
                    </Link>
                  )}
                </section>
              </div>
            );
          })}
      </div>
    );
  }
}

const styles = {
  tournamentContainer: {
    width: 600,
    height: 260,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "#262626",
    padding: "10px 0 50px 0",
    boxSizing: "border-box",
    // borderRadius: 5,
    position: "relative",
    margin: 20,
    // boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
  },
  title: {
    fontWeight: "800",
    fontSize: 26,
    color: "white",
    alignSelf: "center",
    textTransform: "uppercase"
  },
  tournament_icons: {
    display: "flex",
    width: "98%",
    height: "50%",
    justifyContent: "space-around",
    alignItems: "center",
    color: "white"
  },
  survivor_icons: {
    width: "70px",
    height: "80px"
  },
  killer_icon: {
    width: "120px",
    height: "130px"
  },
  footer: {
    width: "100%",
    display: "flex",
    height: 40,
    fontWeight: 20,
    backgroundColor: "rgba(0,0,0,0.7)",
    fontWeight: "bolder",
    position: "absolute",
    bottom: 0,
    // borderRadius: "0 0 5px 5px",
    cursor: "pointer"
  }
};

export default props => (
  <Context.Consumer>
    {context => (
      <TournamentLists
        {...props}
        team_id={context.state.userInfo.team_id}
        isUserLoggedIn={context.state.isUserLoggedIn}
      />
    )}
  </Context.Consumer>
);
