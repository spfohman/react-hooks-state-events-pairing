import React from 'react';

function LikeButton({likes, onClick}){
    return(
        <>
        <button onClick={()=> onClick()}>{likes}</button>
        </>
    )
}
export default LikeButton;