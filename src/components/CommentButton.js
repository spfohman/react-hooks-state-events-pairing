import React from 'react';

function CommentButton({onToggle}){
    return(
        <button onToggle={onToggle}>HideComments</button>
    )
}
export default CommentButton;