import React from "react";
import { Header, PurpleText } from "../../GlobalStyles";
import { Context } from "../../ContextAPI";
import { Link } from "react-router-dom";

const UPCOMMING_URL =
  "https://cdn3.gamepur.com/images/guide/dead-by-daylight-nurse.jpg";

const IMAGE_URL =
  "https://anashiny.files.wordpress.com/2018/03/dead-by-daylight.jpg";

const PREV_URL = "https://images.mmorpg.com/images/heroes/news/48820.jpg";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    padding: 20,
    boxSizing: "border-box",
    height: "70vh",
    backgroundColor: "#383838"
  },
  boxContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: 'center',
    marginTop: 20
  },
  box: {
    position: "relative",
    width: "400px",
    height: "220px",
    backgroundColor: "black",
    cursor: "pointer"
  },
  biggerBox: {
    position: "relative",
    width: "420px",
    height: "240px",
    backgroundColor: "black",
    cursor: "pointer"
  },
  image: {
    width: "100%",
    height: "100%",
    filter: "brightness(100%)"
  },
  footer: {
    position: "absolute",
    bottom: 0,
    padding: 20,
    boxSizing: "border-box",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    width: "100%",
    fontWeight: "bolder",
    fontSize: "20px",
    color: "white"
  }
};

class TournamentsLanding extends React.Component {
  componentDidMount() {
    this.props.setHeaderTab("tournaments");
  }
  render() {
    const { container, boxContainer, biggerBox, box, image, footer } = styles;
    return (
      <div style={container}>
        <Header>
          CHOOSE A <PurpleText>TOURNAMENT</PurpleText>
        </Header>

        <div style={boxContainer}>
          <Link to="/dbd-tournaments/previous">
            <section style={box} className='tournament_picture'>
              <img src={PREV_URL} alt="" style={image} />
              <div style={footer}>
                <h1 style={{ margin: "auto" }}>PREVIOUS TOURNAMENTS</h1>
              </div>
            </section>
          </Link>

          <Link to="/dbd-tournaments/current">
            <section style={biggerBox} className='tournament_picture'>
              <img src={IMAGE_URL} alt="" style={image} />
              <div style={footer}>
                <h1 style={{ margin: "auto" }}>CURRENT TOURNAMENTS</h1>
              </div>
            </section>
          </Link>

          <Link to="/dbd-tournaments/upcoming">
            <section style={box} className='tournament_picture'>
              <img src={UPCOMMING_URL} alt="" style={image} />
              <div style={footer}>
                <h1 style={{ margin: "auto" }}>UPCOMING TOURNAMENTS</h1>
              </div>
            </section>
          </Link>
        </div>
      </div>
    );
  }
}

export default props => (
  <Context.Consumer>
    {context => (
      <TournamentsLanding {...props} setHeaderTab={context.setHeaderTab} />
    )}
  </Context.Consumer>
);
