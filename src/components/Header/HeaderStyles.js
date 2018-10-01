import styled from 'styled-components'

export let HeaderContainer = styled.div`
    height: 80px;
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-around;
    background-color: #2b2b2b;
    z-index: 1;

    section {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }
`

export let NavContainer = styled.section`
    width: 30% !important;
    display: flex;
    justify-content: space-between;
`

export let NavOptions = styled.h1`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px 0 15px;
    box-sizing: border-box;
    color: white;
    font-size: 14px;
    font-weight: lighter;
    cursor: pointer;
    letter-spacing: 1.5px;
    transition: 0.1s all;

    ${props => props.selected && `
        color: #9c32f7;
        border-bottom: 4px solid #9c32f7;
    `}
`

export const BellIcon = styled.img`
    width: 20px;
`

export const NotificationBox = styled.div `
    width: 250px;
    height: fit-content;
    display: flex;
    justify-content: center;
    background-color: #2b2b2b;
    padding: 10px;
    box-sizing: border-box;
    position: absolute;
    top: 80px;
    right: 0;
    z-index: 10;
`

export const TeamContainer = styled.div`
    width: 100%;
    height: 100px;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;

    img {
        height: 130%;
    }

    section {
        display: flex;
        height: 50px;
    }

    button {
        width: 45%;
        height: 50%;
        background-color: green;
    }
    
    h1 {
        color: white;
        font-weight: bolder;
    }
`