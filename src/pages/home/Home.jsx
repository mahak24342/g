
import TopBar from "../../components/topbar/TopBar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feel from "../../components/feel/Feel"
import Rightbar from "../../components/rightbar/Rightbar"
import "./home.css"
const Home = () => {
  return (
    <>
     <TopBar/>
     <div className="homeContainer">
    <Sidebar/>
    
  <Feel/>
  <Rightbar/>
</div>
  </>
  );
}

export default Home