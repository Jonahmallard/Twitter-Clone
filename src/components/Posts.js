import React from 'react';
import Post from './Post'

const Posts = (props) => {
    return (
        <div>
            {props.posts.map(post => 
            <div key={post.id}>
                <Post post={post}/>
            </div>)}
        </div>
    )
}

export default Posts;