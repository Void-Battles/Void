import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 100%;
  height: 400px;
  background: url(${props => props.map});
  background-size: cover;
  background-repeat: none;
  position: relative;
  background-attachment: fixed;
  background-position: ${props => props.pos};
  display: flex;
`;

export const MapDescriptionContainer = styled.div`
  width: 100%;
  background-color: ${props => (props.secondary ? "#262626" : "#383838")};
  padding: 30px;
  box-sizing: border-box;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MapPictureContainer = styled.div`
  width: 80%;
  height: 200px;
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  img {
    width: ${props => props.width};
    height: 100%;

    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const KillerDescriptionContainer = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${props => (props.secondary ? "#262626" : "#383838")};
  padding: 30px;
  box-sizing: border-box;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SurvivorContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 150px;
  }
  h1 {
    color: white;
    margin-top: 10px;
    font-weight: bolder;
  }
`