const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export const editPost = (post) => {
    return (dispatch) => {
        fetch(`${API_URL}/posts/${post.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(updatedPost => dispatch({type: 'EDIT_POST', payload: updatedPost}))
    }
}