import React from 'react';
import { Link } from 'react-router-dom';

const Posts = (props) => {
    return (
        <div>
            <h1>Tweetys</h1>
            {props.posts.map(post => 
            <div key={post.id} class="card" style={{width: '18rem', justifyContent: 'center'}}>
                <div class="card-body">
                    <Link to={`/${post.id}`}><h2 class="card-title">{post.username}</h2></Link>
                    {<p>{post.content}</p>}
                    {<div>Likes: {post.likes}</div>}
                </div>
            </div>)}
        </div>
    )
}

export default Posts;