import { useEffect, useState } from "react"
import axios from "axios"
import "./conversation.css"

export default function Conversation({conversation, currentUser}) {
  const[user,setUser] = useState(null)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(()=>{
    const friendId = conversation.members.find(m=>m !== currentUser._id)
    console.log(friendId);
  
    const getUser = async ()=>{
      try{
        const res = await axios("/users?userId="+friendId)
      console.log(res.data)
      setUser(res.data)
      }catch(err){
        console.log(err);
      }
    };
    getUser()
  },[currentUser, conversation]);



  return (
    <div className = "conversation">
      <img className = "conversationImg" src={user?.profilePicture ? PF + user.profilePicture : PF + "person/nopfp.jpg"} alt="" />
        <span className="conversationName">{user?.username}</span>
    </div>
  )
}
