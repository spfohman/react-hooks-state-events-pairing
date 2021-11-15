import React from 'react';

function CommentButton({onToggle}){
    return(
        <button onClick={onToggle}>HideComments</button>
    )
}
export default CommentButton;