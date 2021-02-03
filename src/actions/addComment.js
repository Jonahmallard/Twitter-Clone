export const addComment = (comment, postId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/posts/${postId}/comments`, {
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