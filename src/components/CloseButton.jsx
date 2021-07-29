import React from 'react'
import {Button} from './styles/CloseButton.SC';




export default function CloseButton({onClose}) {
    return <Button onClick={onClose}>&#10006;</Button>
}
