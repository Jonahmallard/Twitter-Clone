export const editPost = (post) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/posts/${post.id}`, {
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