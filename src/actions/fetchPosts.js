const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export default function fetchPosts() {
    return (dispatch) => {
    fetch(`${API_URL}/posts`)
    .then(res => res.json())
    .then(posts => dispatch({
        type: 'FETCH_POSTS',
        payload: posts
    }))
    }
}