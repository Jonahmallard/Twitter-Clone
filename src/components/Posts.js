import React from 'react';

const Posts = (props) => {
    return (
        <div>
            {props.posts.map(post => 
            <div key={post.id}>
                <h2>{post.username}</h2>
                <p>{post.content}</p>
                <div>Likes: {post.likes}</div>
            </div>)}
        </div>
    )
}

export default Posts;