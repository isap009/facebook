import { Avatar } from '@material-ui/core';
import { AccountCircleOutlined, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbUp } from '@material-ui/icons';
import React from 'react'
import "./Post.css";
function Post({profilePic,image,username,timestamp,message}) {
    return (
        <div className="post">
            <div className="post_top">
                <Avatar className="post_avatar" src={profilePic}>
                </Avatar>
                <div className="post_topInfo">
<h3>{username}</h3>
<p>{new Date(timestamp?.toDate()).toUTCString()}</p>
</div>
            </div>
                
                <div className="post_bottom">
                    {message}
                </div>
                <div className="post_image">
                    <img src={image} alt="SOme other POST"></img>
                </div>
            <div className="post_options">
                <div className="post_option">
                <ThumbUp/>
                <p>Like</p>
                </div>
                <div className="post_option">
                <ChatBubbleOutline/>
                <p>Comment</p>
                </div>
                <div className="post_option">
                <NearMe/>
                <p>Share</p>
                </div>
                <div className="post_option">
                <AccountCircleOutlined/>
                <ExpandMoreOutlined/>
                </div>
            </div>
            
        </div>
    )
}

export default Post
