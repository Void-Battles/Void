import React from 'react'
import { Link } from 'react-router-dom'
import {
  HeroContainer,
  HeroButtonsContainer,
  WhatIsVoidBattlesContainer,
  Paragraph,
  DescriptionContainer,
  InfoContainer,
  SignUpButton
} from './LandingStyles'
import {
  PageContainer,
  LogoContainer,
  SubHeader,
  PurpleText,
  HeroButton
} from '../../GlobalStyles'
import { Context } from '../../ContextAPI'

import EqualSign from '../../resources/equal-sign.png'
import Chat from '../../resources/chat.png'
import Feedback from '../../resources/feedback.png'
import Cup from '../../resources/cup.png'
import LevelUp from '../../resources/level-up.png'

import { Header, Button } from 'semantic-ui-react'

class Landing extends React.Component {
  componentDidMount = () => this.props.setHeaderTab('home')
  render() {
    return <LandingComponent />
  }
}

const LandingComponent = () => {
  return (
    <PageContainer>
      <HeroContainer>
        <Header size="huge" color="violet" style={{fontSize: 50}}>
          <span style={{ color: 'white' }}>VOID_</span>BATTLES
        </Header>
        <h2
          style={{
            color: 'white',
            letterSpacing: '1.4px',
            fontWeight: 'lighter'
          }}
        >
          fair competitive e-sports
        </h2>

        <HeroButtonsContainer>
          <Link to="/register">
            <Button inverted color='violet' size='big'>REGISTER</Button>
          </Link>
          -<Button inverted color='violet' size='big'>TOURNAMENTS</Button>
        </HeroButtonsContainer>
      </HeroContainer>

      <WhatIsVoidBattlesContainer>
      <Header size="huge" color="violet">
          What is <span style={{ color: 'white' }}>VOID_</span>BATTLES?
        </Header>
        <Paragraph width="600px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat
          leo quis lorem blandit faucibus. Aliquam erat volutpat. Suspendisse
          tincidunt, ante ut elementum laoreet, est nisl malesuada urna, quis
          vulputate augue lorem vehicula arcu. Nullam lacinia pellentesque ex,
          sit amet cursus ipsum mattis nec. Donec in orci vel arcu semper
          interdum.
        </Paragraph>

        <DescriptionContainer>
          <InfoContainer>
            <img src={EqualSign} alt="" />
            <SubHeader primary>FAIR GAME</SubHeader>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat leo quis lorem blandit faucibus. Aliquam erat volutpat.
            </Paragraph>
          </InfoContainer>

          <InfoContainer>
            <img src={Chat} alt="" />
            <SubHeader primary>ADMIN SUPPORT</SubHeader>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat leo quis lorem blandit faucibus. Aliquam erat volutpat.
            </Paragraph>
          </InfoContainer>

          <InfoContainer>
            <img src={Feedback} alt="" />
            <SubHeader primary>PLAYER FEEDBACK</SubHeader>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              volutpat leo quis lorem blandit faucibus. Aliquam erat volutpat.
            </Paragraph>
          </InfoContainer>
        </DescriptionContainer>
      </WhatIsVoidBattlesContainer>

      <WhatIsVoidBattlesContainer secondary>
        <SubHeader secondary>FIND TEAMS AND PLAYERS EASILY</SubHeader>
        <Paragraph secondary width={'100%'}>
          Nunc volutpat leo quis lorem blandit faucibus. Aliquam erat volutpat.
        </Paragraph>

        <DescriptionContainer width="40%" margin={'60px'}>
          <InfoContainer>
            <img src={Cup} alt="" />
            <SubHeader primary>PLAY IN TOURNAMENTS</SubHeader>
          </InfoContainer>

          <InfoContainer>
            <img src={LevelUp} alt="" />
            <SubHeader primary>RANK UP YOUR TEAM</SubHeader>
          </InfoContainer>
        </DescriptionContainer>
      </WhatIsVoidBattlesContainer>

      <WhatIsVoidBattlesContainer>
        <Header style={{color: 'white'}}>READY TO OWN THE BATTLEFIELD?</Header>
        <Link to="/register" style={{ marginTop: '40px' }}>
          <SignUpButton>REGISTER</SignUpButton>
        </Link>
      </WhatIsVoidBattlesContainer>
    </PageContainer>
  )
}

export default () => (
  <Context.Consumer>
    {context => <Landing setHeaderTab={context.setHeaderTab} />}
  </Context.Consumer>
)
