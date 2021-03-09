import React from 'react';
import { Link } from 'react-router-dom';

const Posts = (props) => {
    return (
        <div>
            <h1>Tweeties</h1>
            {props.posts.map(post => 
            <div key={post.id} class="card">
                <div class="card-body">
                    <h2 class="card-title">{post.username}</h2>
                    {<p class="card-text">{post.content}</p>}
                    {<p>Likes: {post.likes}</p>}
                    <Link to={`/${post.id}`} class="btn btn-primary">Add a Comment</Link>
                </div>
            </div>)}
        </div>
    )
}

export default Posts;