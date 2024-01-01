import "./sidebar.css"
import {Bookmark, ChatBubble, Event, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline} from "@material-ui/icons"
import {Users} from "../../dummyData"
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar(){
    return(
        <div className = "sidebar">
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <ul className="sidebarList">
                        <li className="sideBarListItem">
                            <RssFeed className ="sidebarIcon"/>
                            <span className="sidebarListItemText">Feed</span>
                        </li>
                        <li className="sideBarListItem">
                            <ChatBubble className ="sidebarIcon"/>
                            <span className="sidebarListItemText">Chats</span>
                        </li>
                        <li className="sideBarListItem">
                            <PlayCircleFilledOutlined className ="sidebarIcon"/>
                            <span className="sidebarListItemText">Videos</span>
                        </li>
                        <li className="sideBarListItem">
                            <Group className ="sidebarIcon"/>
                            <span className="sidebarListItemText">Groups</span>
                        </li>
                        <li className="sideBarListItem">
                            <Bookmark className ="sidebarIcon"/>
                            <span className="sidebarListItemText">Bookmarks</span>
                        </li>
                        <li className="sideBarListItem">
                            <HelpOutline className ="sidebarIcon"/>
                            <span className="sidebarListItemText">Questions</span>
                        </li>
                        <li className="sideBarListItem">
                            <WorkOutline className ="sidebarIcon"/>
                            <span className="sidebarListItemText">Jobs</span>
                        </li>
                        <li className="sideBarListItem">
                            <Event className ="sidebarIcon"/>
                            <span className="sidebarListItemText">Events</span>
                        </li>
                        <li className="sideBarListItem">
                            <School className ="sidebarIcon"/>
                            <span className="sidebarListItemText">Courses</span>
                        </li>
                    </ul>
                    <button className="sidebarButton">Show More</button>
                    <hr className="sidebarHr"/>
                    <ul className="sidebarFriendList">
                        {Users.map((u)=>(
                            <CloseFriend key={u.id} user={u}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}