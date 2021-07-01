import { Link } from 'react-router-dom';
import { useState } from 'react';

const Posts = (props) => {
    // const [sortedPosts, setSortedPosts] = useState(false);
    // const sortPosts = props.posts.sort((a, b) => a.likes - b.likes);
    // const unSortPosts = props.posts.sort((a, b) => b.likes - a.likes);
    // console.log(sortPosts);
    // console.log(props.posts);
    return (
        <div>
            <br/>
            <h1>Tweeties</h1>
            {/* <button onClick={sortedPosts ? setSortedPosts : sortPosts}>Sort</button> */}
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