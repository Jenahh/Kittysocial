import "./sidebar.css"
import {
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    Event,
    School,
    VideogameAsset
  } from "@material-ui/icons"
  import {Users} from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend";
import { Link } from "@material-ui/core";

export default function Sidebar(){
    return (
        <div className="sidebar">
          <div className="sidebarWrapper">
            <ul className="sidebarList">
              <li className="sideBarListItem">
                <RssFeed className="sidebarIcon" />
                <Link to="/" style={{ textDecoration: "none" }}>
                  <span className="sideBarListItemText">Feed</span>
                </Link>
              </li>
              <li className="sideBarListItem">
                <Chat className="sidebarIcon" />
                <Link to="/messenger" style={{ textDecoration: "none" }}>
                  <span className="sideBarListItemText">Chats</span>
                </Link>
              </li>
              <li className="sideBarListItem">
                <PlayCircleFilledOutlined className="sidebarIcon" />
                <a href="https://www.youtube.com/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
                  <span className="sideBarListItemText">Videos</span>
                </a>
              </li>
              <li className="sideBarListItem">
                <Group className="sidebarIcon" />
                <a href="https://reddit.com/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
                  <span className="sideBarListItemText">Groups</span>
                </a>
              </li>
              <li className="sideBarListItem">
                <Bookmark className="sidebarIcon" />
                <a href="https://z-lib.org/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
                  <span className="sideBarListItemText">Bookmarks</span>
                </a>
              </li>
              <li className="sideBarListItem">
                <HelpOutline className="sidebarIcon" />
                <a href="https://quora.com/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
                  <span className="sideBarListItemText">Questions</span>
                </a>
              </li>
              <li className="sideBarListItem">
                <VideogameAsset className="sidebarIcon" />
                <a href="https://store.steampowered.com/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
                  <span className="sideBarListItemText">Video Games</span>
                </a>
              </li>
              <li className="sideBarListItem">
                <Event className="sidebarIcon" />
                <a href="https://www.eventsforgamers.com/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
                  <span className="sideBarListItemText">Events</span>
                </a>
              </li>
              <li className="sideBarListItem">
                <School className="sidebarIcon" />
                <a href="https://www.gamersensei.com/" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
                  <span className="sideBarListItemText">Coaching</span>
                </a>
              </li>
            </ul>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{ textDecoration: "none" }} target="_blank" rel="noreferrer">
              <button className="sidebarButton">Show More</button>
            </a>
                    <hr className="sidebarHr"/>
                    <ul className="sidebarFriendList">
                        {Users.map((u)=>(
                            <CloseFriend key={u.id} user={u}/>
                        ))}
                    </ul>
                </div>
            </div>
    )
}
