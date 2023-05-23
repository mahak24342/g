import React from 'react'
import "./closeFriend.css";
export const CloseFriend = ({user}) => {
  return (
    <div>
        <li className='sidebarfriend'>
            <img className='sidebarFriendImg' src={user.profilePicture} alt=" "/>
            <span className='sidebarFriendName'>{user.username}</span>
         </li>
    </div>
  )
}
