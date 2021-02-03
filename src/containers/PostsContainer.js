import React from 'react';
import { connect } from 'react-redux';
import Posts from '../components/Posts';
import PostForm from '../components/PostForm';
import fetchPosts from '../actions/fetchPosts';

class PostsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }


    render() {
        return (
            <div>
                <PostForm />
                <Posts posts={this.props.posts}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, {fetchPosts})(PostsContainer);