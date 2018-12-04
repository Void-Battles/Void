import styled from 'styled-components'

export let PageContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	color: white;
	background-color: #383838;
`

export let LogoContainer = styled.section`
	display: flex;
	font-size: ${props => (props.fromLanding ? '60px' : '35px')};

	h1 {
		color: #9c32f7;
		font-weight: lighter;
	}

	h2 {
		color: white;
		font-weight: bolder;
		font-size: inherit;
	}
`

export let SubHeader = styled.h1`
	font-size: 24px;
	font-weight: bold;
	margin: 15px 0 15px 0;
	${props =>
		props.primary &&
		`
        color: #9c32f7;
    `};

	${props =>
		props.secondary &&
		`
        color: white;
    `};
`

export let Header = styled.h1`
	font-size: 40px;
	font-weight: bolder;
	margin: 40px 0 40px 0;
	color: white;

	@media only screen and (min-width: 1224px) {
		font-size: 36px;
	}
`

export let PurpleText = styled.span`
	color: #a031ff;
	font-weight: ${props => props.light ? '100' : 'inherit'};
`

export let HeroButton = styled.button`
	width: ${props => props.width ? props.width : '160px'};
	height: 45px;
	border: 1px solid #9c32f7;
	border-radius: 0px;
	background-color: rgba(0, 0, 0, 0.3);
	color: white;
	font-size: 16px;
	font-weight: lighter;
	${props => props.link && 'cursor: pointer'};
`
