import React from 'react';
import { connect } from 'react-redux';
import { editPost } from '../actions/editPost'

class PostEdit extends React.Component {

    state = {
        username: '',
        content: '',
        likes: 0
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let post = {...this.state, id: this.props.post.id}
        this.props.editPost(post)
        this.setState({
            username: '',
            content: '',
            likes: 0
        })
    }

    render() {
        return (
            <div>
                <hr/>
                <h3>Edit Post</h3>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" name='username' placeholder='Enter Username' value={this.state.username} onChange={this.handleChange}/>
                    <br/>
                    <input required type="text" name='content' style={{marginTop:'10px'}} placeholder='New Content Goes Here!' value={this.state.content} onChange={this.handleChange}/>
                    <br/>
                    <input type="submit" style={{marginTop:'10px'}}/>
                </form>
            </div>
        )
    }
}

export default connect(null, { editPost })(PostEdit);