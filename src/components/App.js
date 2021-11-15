import video from "../data/video.js";
import VideoData from './VideoData'
import LikeButton from "./LikeButton.js";
import DislikeButton from "../DislikeButton.js";
import Comments from "./Comments.js";
import CommentButton from './CommentButton'
import React, {useState} from 'react';

function App() {
  console.log("Here's your data:", video);
  const[dislikes, setDislikes]=useState(video.downvotes);
  const [likes, setLikes]=useState(video.upvotes);
  const[showComments, setShowComments]=useState(true);

  function upVote(){
    setLikes(likes+1);
  }
  function downVote(){
    setDislikes(dislikes-1)
  }
  function toggleComments(){
    console.log('clicked')
    setShowComments(!showComments)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoData title={video.title} date={video.createdAt} views={video.views}/>
      <span><LikeButton likes={likes} onClick={upVote}/><DislikeButton dislikes={dislikes} onClick={downVote}/></span>
      <CommentButton onToggle={toggleComments}/>
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
