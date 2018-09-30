import styled from 'styled-components'
import ProfileBackground from '../../resources/profile_background.jpeg'

export let ProfileBackgroundContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: url(${ProfileBackground});
	background-size: cover;
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-position-y: -130px;
	height: 500px;

	@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
		height: 400px;
	}
`

export let ProfileContentsContainer = styled.div`
	height: 170px;
	width: 60%;
	min-width: 700px;
	display: flex;
	justify-content: space-between;

	@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
		width: 80%;
	}
`

export let ProfilePicture = styled.img`
	height: 170px;
	margin-right: 10px;
`

export let ProfileContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export let UsernameContainer = styled.div`
	display: flex;
	align-items: center;
	font-size: 28px;
	font-weight: bolder;
	h2 {
		font-size: 20px;
		font-weight: normal;
		color: rgba(255, 255, 255, 0.65);
	}
	img {
		width: 25px;
		height: 25px;
		margin-right: 15px;
	}
	margin-bottom: 10px;
`

export let ProfileButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 300px;
	height: 80px;
`

export let ProfileButton = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 90px;
	font-size: 13px;
	font-weight: normal;
	border: 1px solid ${props => props.color};
	color: ${props => props.color};
	cursor: default;
	transition: all 0.4s ease;
	background-color: rgba(0, 0, 0, 0.1);

	img {
		height: 30px;
	}

	&:hover {
		background-color: rgba(255, 255, 255, 0);
	}
`

export let TeamIconContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100%;
	font-size: 18px;
	font-weight: bold;
	text-align: center;
	cursor: pointer;
	color: white;
`

export let TeamIcon = styled.img`
	height: 80%;
	margin-bottom: 5px;
`

// Ranks Conatiner

export let RankContainer = styled.div`
	width: 60%;
	height: 300px;
	align-self: center;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	box-sizing: border-box;

	@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
		width: 80%;
	}
`

export let RankContent = styled.div`
	width: 200px;
	height: 220px;
	font-size: 26px;
	font-weight: bolder;

	h1 {
		height: 15%;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #2b2b2b;
		height: 85%;

		h1 {
			font-size: 20px;
			margin-top: 5px;
			color: white;
		}

		img {
			height: 70%;
		}
	}
`

export let TeamRepContainer = styled.div`
	width: 45%;
	height: 220px;
	font-size: 26px;
	font-weight: bolder;

	> h1 {
		height: 15%;
	}
`

export let TeamRepContent = styled.div`
	height: 85%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 20px;
	box-sizing: border-box;
	background-color: #2b2b2b;

	section {
		width: 100%;
		height: 30%;
		background-color: #383838;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;

		h1 {
			position: absolute;
			font-size: 24px;
			font-weight: 700;
			align-self: center;
			margin-top: 10px;
		}

		div {
			background-color: #7ed321;
			width: ${props => props.rep};
			height: 100%;
		}
`

export let ViewRatingsButton = styled.button`
	height: 40px;
	font-size: 16px;
	background-color: #9013fe;
	color: white;
`

// Matches

export let MatchesContainer = styled.div`
	width: 60%;
	align-self: center;
	padding: 20px;
	box-sizing: border-box;
	margin-bottom: 20px;

	@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
		width: 80%;
	}
`

export let ContainerTitle = styled.h1`
	font-size: 24px;
	font-weight: bolder;
	height: 15%;
`

export let MatchesContent = styled.div`
	background-color: #2b2b2b;
	padding: 10px;
	box-sizing: border-box;
`

export let MatchContainer = styled.div`
	width: 100%;
	height: 120px;
	border-bottom: 1px solid gray;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 10px;

	img {
		height: 50px;
		margin-right: 10px;
	}

	section {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px;
		box-sizing: border-box;
	}

	&:last-child {
		border-bottom: none;
	}
`

export let TeamsContainer = styled.section`
	> h1 {
		margin-right: 20px;
		font-size: 22px;
	}
`

export let TeamContainer = styled.div`
	width: 125px;
	text-align: center;
	font-weight: 100;
	align-items: center;
	cursor: pointer;

	img {
		height: 80px;
		margin: 0;
	}
`

export let ScoreContainer = styled.section``

export let ScoreStamps = styled.span`
	font-size: 22px;
	color: ${props => (props.color ? props.color : 'white')};
`

export let TimeContainer = styled.section``

export let TimeContent = styled.section`
	flex-direction: column;
`

export let TimeStamps = styled.p`
	color: ${props => (props.color ? props.color : 'white')};
	font-weight: ${props => (props.bold ? 'bold' : 'normal')};
`

export let GameStatusContainer = styled.section`
	width: 130px;
	justify-content: space-between !important;
	font-size: 20px;
	color: ${props => (props.gameStatus === 'win' ? '#7ED321' : '#C20018')};
	img {
		margin: 0;
	}
`
