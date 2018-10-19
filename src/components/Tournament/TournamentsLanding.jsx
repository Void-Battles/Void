import React from "react";
import { Header, PurpleText } from "../../GlobalStyles";

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
    height: "60vh",
    backgroundColor: "#383838"
  },
  boxContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    marginTop: 20
  },
  box: {
    position: "relative",
    width: "420px",
    height: "240px",
    backgroundColor: "black"
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
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    width: "100%",
    fontWeight: "bolder",
    fontSize: "20px",
    color: "white"
  }
};

class TournamentsLanding extends React.Component {
  render() {
    const { container, boxContainer, box, image, footer } = styles;
    return (
      <div style={container}>
        <Header>
          CHOOSE A <PurpleText>TOURNAMENT</PurpleText>
        </Header>

        <div style={boxContainer}>
          <section style={box}>
            <img src={PREV_URL} alt="" style={image} />
            <div style={footer}>
              <h1 style={{ margin: "auto" }}>PREVIOUS TOURNAMENTS</h1>
            </div>
          </section>

          <section style={box}>
            <img src={IMAGE_URL} alt="" style={image} />
            <div style={footer}>
              <h1 style={{ margin: "auto" }}>CURRENT TOURNAMENTS</h1>
            </div>
          </section>

          <section style={box}>
            <img src={UPCOMMING_URL} alt="" style={image} />
            <div style={footer}>
              <h1 style={{ margin: "auto" }}>UPCOMING TOURNAMENTS</h1>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default TournamentsLanding;
