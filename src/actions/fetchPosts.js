export default function fetchPosts() {
    return (dispatch) => {
    fetch('http://localhost:3000/posts')
    .then(res => res.json())
    .then(posts => dispatch({
        type: 'FETCH_POSTS',
        payload: posts
    }))
    }
}