import React from 'react';

const Post = (props) => {
    return (
        <div>
            <h2>{props.post.username}</h2>
            <p>{props.post.content}</p>
            <div>Likes: {props.post.likes}</div>
        </div>
    )
}

export default Post;