import React from 'react'
import styled from 'styled-components';

const Button = styled.button `
    display:flex;
    width:25px;
    height:25px;
    border:3px solid #0b2545;
    border-radius:100%;
    background-color:#0b2545;
    box-shadow:0px 0px 5px 2px rgba(0,0,0,.2);
    
    margin:8px 8px 0 0;
    
    justify-content: center;
    align-items: center;
    color:white;
    font-family: sans-serif;
    font-size: 15px;
    font-weight: bold;

    cursor: pointer;

    &:hover {
            background-color:#8da9c4;
            border-color: #8da9c4

    }
`


export default function CloseButton({onClose}) {
    // const handleOnClose = () => {
    //     console.log(key)
    //     onClose(key)};
    return <Button onClick={onClose}>&#10006;</Button>
}
