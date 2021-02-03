import React from 'react';
import { Redirect } from 'react-router-dom';

const Post = (props) => {

    let post = props.posts[props.match.params.id -1]

    return (
        <div>
            {post ? null : <Redirect to='/'/>}
            {post ? <h1>Post #{post.id}</h1> : null}
            {post ? <h2>{post.username}</h2> : null}
            {post ? <p>{post.content}</p> : null}
            {post ? <div>Likes: {post.likes}</div> : null}
        </div>
    )
}

export default Post;