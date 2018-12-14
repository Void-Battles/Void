import styled from 'styled-components'

export let LoginContainer = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 100px 0 150px 0;
	box-sizing: border-box;

	@media only screen and (min-width: 1224px) {
		padding: 50px 0 100px 0;
	}
`

export let Logo = styled.img`
	width: 100px;
	margin-bottom: 20px;

	@media only screen and (min-width: 1224px) {
		width: 80px;
	}
`

export let Contents = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 550px;
	height: 460px;
	background-color: rgba(118, 118, 118, 0.34);
	padding: 0 45px 0 45px;
	box-sizing: border-box;

	@media only screen and (min-width: 1224px) {
		width: 500px;
	}
`

export let InputContainer = styled.section`
	width: 100%;
	margin-bottom: 50px;
`

export let InputTitle = styled.h1`
	width: 100%;
	font-size: 16px;
	font-weight: bold;
	margin-bottom: 10px;
`

export let Input = styled.input`
	width: 100%;
	height: 40px;
	border: none;
	font-size: 16px;
	font-weight: bold;
	color: #383838;
	padding-left: 10px;
	box-sizing: border-box;
`

export let InputError = styled.h2`
	margin-top: 5px;
	color: #db485a;
	font-weight: bold;
	font-size: 14px;
`

export let ButtonContainer = styled.div`
	width: 100%;
    text-align: center;
    cursor: pointer;
`
