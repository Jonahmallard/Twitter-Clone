import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Post from '../components/Post';
import Posts from '../components/Posts';
import PostForm from '../components/PostForm';
import fetchPosts from '../actions/fetchPosts';
import NavBar from '../components/NavBar';

class PostsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }


    render() {
        return (
            <div>
                <NavBar />
                <Switch>  
                    <Route path='/new' component={PostForm}/>
                    <Route path='/:id' render={(routerProps) => <Post {...routerProps} posts={this.props.posts}/> } />
                    <Route path='/' render={(routerProps) => <Posts {...routerProps} posts={this.props.posts}/> } />
                </Switch>
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