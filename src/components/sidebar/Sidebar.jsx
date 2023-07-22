import React from 'react'
import "./sidebar.css";

import {Users} from "../../dummyData";
import { CloseFriend } from '../closeFriend/CloseFriend';


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarwrapper">
            <ul className='sidebarList'>
                <li className='sidebarListItem'>


<span className='sidebarListItemtext'>Feed</span>

                </li>
<li className="sidebarListItem">

    <span className="sidebarListItemText">Chats</span>
</li>
<li className="sidebarListItem">

<span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BsFillBookmarkFill className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            
            <span className="sidebarListItemText">Jobs</span>
         
          </li>
          <li className="sidebarListItem">
            
            <span className="sidebarListItemText">Events</span>
         
          </li>
          <li className="sidebarListItem">
            
            <span className="sidebarListItemText">Courses</span>
         
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
         {Users.map(u=>(
          <CloseFriend key= {u.id} user= {u}/>
         ))}
            </ul>
        </div>
    </div>
  )
}

export default Sidebar