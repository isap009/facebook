import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import './Story.css';
function Story({image, src,title}) {
    return (
        <div style={{backgroundImage:`url(${image})`}} className="story">
            <Avatar className="story_avatar" src={src}></Avatar>        
            <h4>{title}</h4>
        </div>
    )
}

export default Story
