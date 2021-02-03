import React from 'react';
import { Link } from 'react-router-dom';

const Posts = (props) => {
    return (
        <div>
            <h1>Tweetys</h1>
            {props.posts.map(post => 
            <div key={post.id}>
                <Link to={`/${post.id}`}><h2>{post.username}</h2></Link>
                {<p>{post.content}</p>}
                {<div>Likes: {post.likes}</div>}
            </div>)}
        </div>
    )
}

export default Posts;