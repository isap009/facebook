import { Avatar } from '@material-ui/core'
import { InsertEmoticonOutlined, PhotoLibraryOutlined, VideocamOutlined } from '@material-ui/icons'
import React,{useState} from 'react'
import "./MessageSender.css";
import { useStateValue } from './StateProvider';
function MessageSender() {
    const [{user},dispatch]=useStateValue();
    const [input, setInput] = useState('');
    const [imageURL, setImageURL] = useState("")
    const handleSubmit=e=>{
        setInput("");
        setImageURL("");
        //e.preventDefault();
    }
    return (
        <div className="messageSender">
            <div className="messageSender_top">
            <Avatar src={user.photoURL}></Avatar>
            <form>
                <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" placeholder={`What's on your mind ${user.displayName}`}></input>
                <input value={imageURL} onChange={(e)=>setImageURL(e.target.value)}placeholder="Image URL"></input>
                <button onClick={handleSubmit} type="submit">Hidden Submit</button>
            </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamOutlined style={{color:"red"}}/> 
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryOutlined style={{color:"green"}}/> 
                    <h3>Photos/Video</h3>
                </div>
                <div className="messageSender_option">
                    <InsertEmoticonOutlined style={{color:"orange"}}/> 
                    <h3>Feeling/Activiy</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
