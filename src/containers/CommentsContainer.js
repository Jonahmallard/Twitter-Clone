import React from 'react';
import Comments from '../components/Comments';
import CommentsForm from '../components/CommentForm';

class CommentsContainer extends React.Component {
    render () {
        return (
            <div>
                <CommentsForm />
                <Comments comments={this.props.post && this.props.post.comments}/>
            </div>
        )
    }
}

export default CommentsContainer;