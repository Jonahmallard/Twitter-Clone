import React from 'react';
import { Redirect } from 'react-router-dom';
import PostEdit from './PostEdit';

import CommentsContainer from '../containers/CommentsContainer';

const Post = (props) => {

    let post = props.posts[props.match.params.id -1]

    return (
        <div>
            {post ? null : <Redirect to='/'/>}
            <br/>
            {post ? <h1>Post #{post.id}</h1> : null}
            <br/>
            {post ? 
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">User: <strong>{post.username}</strong></h3>
                        <p className="card-text"><strong>Posted: </strong>{post.content}</p>
                        <p>{post.likes} likes</p> 
                    </div>
                </div> : null}
            <PostEdit post={post}/>
            <CommentsContainer post={post}/>
        </div>
    )
}

export default Post;