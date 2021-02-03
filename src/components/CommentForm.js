import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../actions/addComment';

class CommentForm extends React.Component {

    state = {
        username: '',
        kind: 'Like',
        content: '',
        likes: 1
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addComment(this.state, this.props.post.id)
        this.setState({
            username: '',
            kind: 'Like',
            content: '',
            likes: 1
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <hr/><hr/><br/>
                    <label>Enter Username to Add a Comment</label>
                    <br/><br/>
                    <input required type="text" name='username' placeholder='Username' value={this.state.username} onChange={this.handleChange}/>
                    <br/><br/>
                    <input required type="text" name='content' placeholder='New Content Goes Here!' value={this.state.content} onChange={this.handleChange}/>
                    <br/><br/>
                    <label>Like or Dislike?</label>
                    &nbsp;&nbsp;
                    <select name="kind" value={this.state.kind} onChange={this.handleChange}>
                        <option>Like</option>
                        <option>Dislike</option>
                    </select>
                    &nbsp;&nbsp;
                    <select name="likes" value={this.state.likes} onChange={this.handleChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                    <br/><br/>
                    <input type="submit"/>
                    <br/><br/>
                    <hr/><hr/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addComment})(CommentForm);