import React from 'react';

function VideoData({title, date, views}){
    return(
    <div>
        <h1>{title}</h1>
        <p>{views} Views | Uploaded: {date}</p>
    </div>
    )
}
export default VideoData;