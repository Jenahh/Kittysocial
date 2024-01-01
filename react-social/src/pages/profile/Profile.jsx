import "./profile.css"
import Topbar from"../../components/topbar/Topbar";
import Sidebar from"../../components/sidebar/Sidebar";
import Feed from"../../components/feed/Feed";
import Rightbar from"../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
    <Topbar />
    <div className = "profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="assets/post/post2.jpeg" alt="" />
              <img className="profileUserImg" src="assets/person/jenah.jpeg" alt="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Jenah Mansour</h4>
              <span className="profileInfoDesc">Welcome to my page!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
    </div>
  </>
  )
}