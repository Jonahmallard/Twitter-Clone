export const deleteComment = (commentId, accountId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/posts/${accountId}/comments/${commentId}`, {
            method: 'DELETE'
        }) 
        .then(res => res.json())
        .then(post => dispatch({type: 'DELETE_COMMENT', payload: post}))
    }
}