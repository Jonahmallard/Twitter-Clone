import React from 'react';
import { Link } from 'react-router-dom';

const Posts = (props) => {
    return (
        <div>
            <br/>
            <h1>Tweeties</h1>
            <br/>
            {props.posts.map(post => 
            <div key={post.id} className="card">
                <div className="card-body">
                    <h3 className="card-title">User: <strong>{post.username}</strong></h3>
                    {<p className="card-text"><strong>Posted: </strong>{post.content}</p>}
                    {<p>{post.likes} likes</p>}
                    <Link to={`/${post.id}`} className="btn btn-primary">Add a Comment</Link>
                </div>
            </div>)}
        </div>
    )
}

export default Posts;