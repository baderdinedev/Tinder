import React from 'react'
import { IconButton } from '@material-ui/core';
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
function Header() {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon  />
        </IconButton>
       <img className='header__img' src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt="" />
       <IconButton>
            <ChatBubbleIcon />
        </IconButton>
    </div>
  )
}

export default Header