import React from 'react'
import {Button} from './styles/CloseButton.SC';


export default function CloseButton({onClose,children}) {
    // return <Button onClick={onClose}>&#10006;</Button>
    return <Button onClick={onClose}>{children}</Button>
}
