import React from 'react';
import Comments from '../components/Comments';
import CommentForm from '../components/CommentForm';

class CommentsContainer extends React.Component {
    render () {
        return (
            <div>
                <CommentForm post={this.props.post}/>
                <Comments comments={this.props.post && this.props.post.comments}/>
            </div>
        )
    }
}

export default CommentsContainer;