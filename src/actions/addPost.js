export const addPost = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/posts', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(post => dispatch({type: 'ADD_POST', payload: post}))
    }
}