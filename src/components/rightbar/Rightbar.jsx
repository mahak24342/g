/*import React from 'react'
import "./rightbar.css"; 


const Rightbar = () => {
  return (
    <div>
      <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img className="birthdayImg "src="assets/gift.png" alt="" />
            <span className="birthdayText">
              <b>Pola Foster</b> and <b>3 other friends</b>have a birthday today.
            </span>
          </div>
          <img className='rightbarAd' src="assets/ad.png" alt=""/>
    
    <h4 className='rightbarTitle'>Online Friends</h4>
    
    
      <ul className='rightbarFriendList'>
        <li className='rightBarFriend'>
          <div className="rightbarProfileImgContainer">
            
            <img className='rightbarProfileImg' src="assets/post/3.jpeg" alt=""/>
            <span className="rightbarOnline"></span>
            </div>
            <span className='rightbarUsername'>Grant Cardone</span>
        </li>
        </ul>
        </div>
      </div>
    </div>
  )


export default Rightbar */



import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/online";

export default function Rightbar({profile}) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
 {Users.map(u=>(
  <Online key={u.id} user={u}/>))}        
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/post/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/post/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/post/11.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/post/33.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/post/2.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/post/1.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
  {profile ?<ProfileRightbar/>: <HomeRightbar/>}
      </div>
    </div>
  );
}