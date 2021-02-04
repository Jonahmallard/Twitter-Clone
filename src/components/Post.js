import React from 'react';
import { Redirect } from 'react-router-dom';
import PostEdit from './PostEdit';

import CommentsContainer from '../containers/CommentsContainer';

const Post = (props) => {

    let post = props.posts[props.match.params.id -1]

    return (
        <div>
            {post ? null : <Redirect to='/'/>}
            {post ? <h1>Post #{post.id}</h1> : null}
            {post ? <h2>{post.username}</h2> : null}
            {post ? <p>{post.content}</p> : null}
            {post ? <div>Likes: {post.likes}</div> : null}
            <br/>
            <CommentsContainer post={post}/>
            <PostEdit post={post}/>
        </div>
    )
}

export default Post;