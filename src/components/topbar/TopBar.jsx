import "./topbar.css";
import {Link} from "react-router-dom"


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
            
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
          
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
         
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