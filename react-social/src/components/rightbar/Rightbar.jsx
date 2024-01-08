import "./rightbar.css";
import {Users} from "../../dummyData"
import Online from "../online/Online";

export default function Rightbar({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightbar = () => {
    return(
      <>
      <div className="birthdayContainer">
              <img className = "birthdayImg" src="assets/gift.png" alt="" />
              <span className = "birthdayText">
                <b>Afnan Mansour</b> and <b>3 other friends</b> have their birthday today.
                </span>
          </div>
          <img className = "rightbarAd" src="assets/ad2.png" alt="" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
            {Users.map((u)=>(
                <Online key={u.id} user={u} />
            ))}
          </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return(
      <>
        <h4 className="rightbarTitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Location:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship Status:</span>
            <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship ===2 ? "Married" : "-"}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${PF}person/abood.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Abdel Rahman Mansour</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/foofsa.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Afaq Mansour</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/ziko.jpeg`}alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Dhikra Mansour</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/shefaa.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Shefaa Mansour</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/afnan.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Afnan Mansour</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${PF}person/tazi.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Tasneem Mansour</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className = "rightbar">
        <div className="rightbarWrapper">
          {user ? <ProfileRightbar/> : <HomeRightbar />}
        </div>
    </div>
  );
}

