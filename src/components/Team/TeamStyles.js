import styled from 'styled-components'

export let RosterContainer = styled.div`
	width: 75%;
	height: 220px;
	align-self: center;
	box-sizing: border-box;

	// @media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1) {
	// 	width: 80%;
	// }
`

export let RosterContent = styled.section`
width: 70%;
height: 220px;
font-size: 26px;
font-weight: bolder;

h1 {
	height: 15%;
}
section {
	display: flex;
	align-items: center;
	justify-content: space-around;
	background-color: #2b2b2b;
	height: 85%;
	padding: 10px;
	box-sizing: border-box;


	h1 {
		font-size: 20px;
		margin-top: 5px;
		color: white;
	}

	img {
		height: 20%;
	}
}
`

export let PlayerContainer = styled.div`
	width: 150px;
	color: white;
	margin-top: 10px;
	
	img {
		height: 150px;
	}

	h1 {
		font-size: 22px;
		margin-top: 10px;
		text-align: center;
	}
`
