import "./post.css"
import {MoreVert} from "@material-ui/icons"

export default function Post() {
  return (
    <div className = "post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img 
                    className = "postProfileImg" 
                    src="/assets/person/abood.jpeg" 
                    alt="" 
                    />
                    <span className="postUsername">Abdel Rahman Mansour</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey! Its my first post ^-^</span>
                <img className = "postImg" src="assets/post/kitty.jpeg" alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className = "likeIcon" src="assets/like.png" alt="" />
                    <img className = "likeIcon" src="assets/heart.png" alt="" />
                    <span className="postLikeCounter">32 users like this post</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  );
}
