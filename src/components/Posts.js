import React from 'react';
import { Link } from 'react-router-dom';

const Posts = (props) => {
    return (
        <div>
            <br/>
            <h1>Tweeties</h1>
            <br/>
            {props.posts.map(post => 
            <div key={post.id} class="card">
                <div class="card-body">
                    <h3 class="card-title">User: <strong>{post.username}</strong></h3>
                    {<p class="card-text"><strong>Posted: </strong>{post.content}</p>}
                    {<p>Likes: {post.likes}</p>}
                    <Link to={`/${post.id}`} class="btn btn-primary">Add a Comment</Link>
                </div>
            </div>)}
        </div>
    )
}

export default Posts;