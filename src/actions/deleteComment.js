const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export const deleteComment = (commentId, accountId) => {
    return (dispatch) => {
        return fetch(`${API_URL}/posts/${accountId}/comments/${commentId}`, {
            method: 'DELETE'
        }) 
        .then(res => res.json())
        .then(post => dispatch({type: 'DELETE_COMMENT', payload: post}))
    }
}