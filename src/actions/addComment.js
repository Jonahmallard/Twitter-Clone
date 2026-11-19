const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export const addComment = (comment, postId) => {
    return (dispatch) => {
        fetch(`${API_URL}/posts/${postId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
        .then(res => res.json())
        .then(post => dispatch({type: 'ADD_COMMENT', payload: post}))
    }
}