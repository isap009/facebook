import React, { useEffect, useState } from 'react'
import StoryReel from "./StoryReel.js";
import "./Feed.css";
import db from "./firebase";
import MessageSender from './MessageSender.js';
import Post from './Post.js';
function Feed() {
    const [posts, setPosts] = useState([]);

        useEffect(() => {
            // console.log("Hii")
            db.collection("posts").onSnapshot((snapshot)=>
            setPosts(snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data()
            }))))
            console.log(posts)
        }, []);
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender></MessageSender>
            {posts.map((post)=>(
                <Post
                key={post.id}
                profilePic={post.data.profilePic}
                image={post.data.image}
                username={post.data.username}
                timestamp={post.data.timestamp}
                message={post.data.message}
                />
            ))}
        
            
        </div>
    )
}

export default Feed
