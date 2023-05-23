import React from 'react'
import "./profile.css";
import TopBar from '../../components/topbar/TopBar';
import Sidebar from '../../components/sidebar/Sidebar';
import Feel from '../../components/feel/Feel';
import Rightbar from '../../components/rightbar/Rightbar';
const Profile = () => {
  return (
    <div>
        <TopBar/>
     <div className="profile">
    <Sidebar/>
<div className="profileRight">  
<div className="profileRightTop">
    <div className="profileCover">
    <img className="profileCoverImg" src="assets/post/8.jpeg" alt=""/>
    <img className="profileUserImg" src="assets/post/4.jpeg" alt=""/>
</div>
<div className="profileInfo">
    <h4 className='profileInfoName'>Mahak Porwal</h4>
    <span className='profileInfoDesc'>Hello How r u doing </span>
</div>
</div>
    <div className="profileRightBottom">
  <Feel/>
  <Rightbar profile/>
</div>
</div>
</div>  
    </div>
  )
}

export default Profile