import "./rightbar.css";
import {Users} from "../../dummyData"
import Online from "../online/Online";

export default function Rightbar({profile}) {

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
            <span className="rightbarInfoValue"> New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue"> Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship Status:</span>
            <span className="rightbarInfoValue"> Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowings">
            <img src="assets/person/abood.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Abdel Rahman Mansour</span>
          </div>
          <div className="rightbarFollowings">
            <img src="assets/person/afnan.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Abdel Rahman Mansour</span>
          </div>
          <div className="rightbarFollowings">
            <img src="assets/person/foofsa.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Abdel Rahman Mansour</span>
          </div>
          <div className="rightbarFollowings">
            <img src="assets/person/ziko.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Abdel Rahman Mansour</span>
          </div>
          <div className="rightbarFollowings">
            <img src="assets/person/shefaa.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Abdel Rahman Mansour</span>
          </div>
          <div className="rightbarFollowings">
            <img src="assets/person/tazi.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Abdel Rahman Mansour</span>
          </div>
        </div>
      </>
    )
  }
  return (
    <div className = "rightbar">
        <div className="rightbarWrapper">
          <ProfileRightbar/>
        </div>
    </div>
  );
}

