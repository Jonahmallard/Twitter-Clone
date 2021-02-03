import React from 'react';

const Comments = (props) => {
    return (
        <div>
            {props.comments && props.comments.map(comment => 
                <div key={comment.id}>
                    <h3>{comment.username}</h3>
                    <p>{comment.content}</p>
                    {comment.kind}
                    &nbsp;
                    {comment.likes}
                </div>    
            )}
        </div>
    )
}

export default Comments;