const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export const addPost = (data) => {
    return (dispatch) => {
        fetch(`${API_URL}/posts`, {
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