import React from 'react';

function Comments({comments}){
    
    const eachComment= comments.map((comment)=>{
       
        return(
            <div key={comment.id}>
            <h2 >User: {comment.user}</h2>
            <p>Comment: {comment.comment}</p>
            </div>
            
        )
    })
    return(
        <div>
            
            {eachComment}
            
        </div>
    )
}
export default Comments;