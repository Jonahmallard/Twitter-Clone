export default function postReducer(state = { posts: [] }, action) {
    switch (action.type) {
        case 'FETCH_POSTS': 
            return {posts: action.payload}
        case 'ADD_POST': 
            return {...state, posts: [...state.posts, action.payload]}
    default:
        return state;
    }
}