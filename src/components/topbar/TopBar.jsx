import "./topbar.css";
import {Link} from "react-router-dom"
import { BsFillPersonFill } from "react-icons/bs";
//import {FaHeart,Search} from "react-icons/fa";
//import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { BsSearch } from "react-icons/bs";
import {IoMdNotifications} from "react-icons/io";
import { BsFillChatLeftTextFill } from "react-icons/bs";

const TopBar = () => {
  return (
    <>
      <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/login">
        <span className="logo">MAHAK</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <BsSearch className="searchIcon"/>
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <IoMdNotifications size={30}/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
          <BsFillChatLeftTextFill size={30}/>
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
           <BsFillPersonFill size={30}/>
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/public/1.jpeg" alt="" className="topbarImg" size={30} />
      </div>
    </div>
</>
  )
}

export default TopBar;