import styled from 'styled-components'
import VB_Background from '../../resources/LEATHERFACE.jpeg'

export let HeroContainer = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: url(${VB_Background});
	background-size: cover;
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	height: 400px;
	@media only screen and (min-width: 1824px) {
		height: 600px;
	}
	h2 {
		font-weight: lighter;
		font-size: 40px;
	}
`

export let HeroButtonsContainer = styled.section`
	display: flex;
	justify-content: space-between;
	width: 400px;
	align-items: center;
`



export let WhatIsVoidBattlesContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${props => (props.secondary ? '#262626' : '#383838')};
	color: white;
	font-size: 18px;
	padding: 30px 0 80px 0;
	box-sizing: border-box;
`

export let Paragraph = styled.p`
	width: ${props => (props.width ? props.width : '400px')};
	text-align: center;
	font-weight: lighter;
	line-height: normal;
	font-size: 18px;
	${props => props.secondary && 'color: rgba(255,255,255,0.7);'};
`

export let SectionHeader = styled.h1`
	font-size: 40px;
	font-weight: bolder;
	margin: 40px 0 40px 0;
	span {
		color: #9c32f7;
		font-weight: 100;
	}
`

export let DescriptionContainer = styled.section`
	width: ${props => (props.width ? props.width : '90%')};
	max-width: ${props => (props.width ? '800px' : '1200px')};
	min-width: ${props => (props.width ? '600px' : '1200px')};
	margin-top: ${props => (props.margin ? props.margin : '40px')};
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export let InfoContainer = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	img {
		width: 80px;
	}
`

export let SignUpButton = styled.button`
	width: 200px;
	height: 50px;
	border: none;
	background-color: #bfbfbf;
	color: #414141;
	font-weight: bold;
	font-size: 18px;
	cursor: pointer;
`
