import React from 'react';

function Comments({comments}){
    
    const eachComment= comments.map((comment)=>{
       
        return(
            <>
            <h2 key={comment.id}>User: {comment.user}</h2>
            <p>Comment: {comment.comment}</p>
            </>
            
        )
    })
    return(
        <div>
            
            {eachComment}
            
        </div>
    )
}
export default Comments;