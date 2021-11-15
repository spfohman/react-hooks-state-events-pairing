import React from 'react';

function DislikeButton({dislikes, onClick}){
    return(
        <>
        <button onClick={()=> onClick()}>{dislikes}</button>
        </>
    )
}
export default DislikeButton;