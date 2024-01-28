import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { useContext, useRef } from "react";
import {Link} from "react-router-dom"
import {AuthContext} from "../../context/AuthContext"


export default function Topbar(){
    const PublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user} = useContext(AuthContext)
    const friendName = useRef();
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const handleClick = (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.href = '/';
    }

    const submitHandler = (e) => {
        e.preventDefault();
        window.location.href = "/profile/" + friendName.current.value;
        return false;
    }

    return(
        <div className = "topbarContainer">
            <div className="topbarLeft">
                <Link to ="/" style={{textDecoration:"none"}}>
                <span className="logo">Kittysocial</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className = "searchIcon"/>
                    <input placeholder = "Search for whatever your heart desires" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <ul className="Dropdown">
                    <li>
                        <img src={user.profilePicture ? PublicFolder + user.profilePicture : PublicFolder + "person/nopfp.jpg"} alt="" className="topbarImg" />
                    </li>
                    <ul className="DropdownMenu">
                        <li className="DropdownItem"><Link to={`/profile/${user.username}`}>Profile Page</Link></li>
                        <li className="DropdownItem"><button className="LogoutButton" onClick={handleClick}>Logout</button></li>
                    </ul>
                </ul>
            </div>
        </div>
    );
}
