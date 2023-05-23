import React from 'react'
import "./sidebar.css";
import {FaWifi} from "react-icons/fa";
import {SiCoursera} from "react-icons/si";
import {BsFillChatRightDotsFill} from "react-icons/bs";
import {BsCameraVideoFill} from "react-icons/bs";
import {MdGroups2 } from "react-icons/md";
import {BsFillBookmarkFill } from "react-icons/bs";
import {AiOutlineQuestionCircle } from "react-icons/ai";
import {FaDesktop } from "react-icons/fa";
import {BsCalendarEvent}  from "react-icons/bs";
import {Users} from "../../dummyData";
import { CloseFriend } from '../closeFriend/CloseFriend';


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarwrapper">
            <ul className='sidebarList'>
                <li className='sidebarListItem'>
<FaWifi className='sidebarIcon'/>

<span className='sidebarListItemtext'>Feed</span>

                </li>
<li className="sidebarListItem">
<BsFillChatRightDotsFill className="sidebarIcon"/>
    <span className="sidebarListItemText">Chats</span>
</li>
<li className="sidebarListItem">
<BsCameraVideoFill className="sidebarIcon"/>

<span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <MdGroups2 className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <BsFillBookmarkFill className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <AiOutlineQuestionCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <FaDesktop className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
         
          </li>
          <li className="sidebarListItem">
            <BsCalendarEvent className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
         
          </li>
          <li className="sidebarListItem">
            <SiCoursera className="sidebarIcon" />
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