import React from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../actions/deleteComment';

const Comments = (props) => {

    const handleDelete = (comment) => {
        props.deleteComment(comment.id, comment.post_id)
    }

    return (
        <div>
            {props.comments && props.comments.map(comment => 
                <div key={comment.id}>
                    <h2>{comment.username}</h2>
                    <p>{comment.content}</p>
                    {comment.kind}
                    &nbsp;
                    {comment.likes}
                    <br/><br/>
                    <button onClick={() => handleDelete(comment)}>Delete</button>
                    <br/><br/><br/>
                </div>    
            )}
        </div>
    )
}

export default connect(null, {deleteComment})(Comments);