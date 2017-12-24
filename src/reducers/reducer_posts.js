import { FETCH_POSTS } from '../actions/index';

 //all - A list of posts, what we want to display in the index page.
 //null - A single post.
const INITIAL_STATE = { all: [], post: null};

export default function(state= INITIAL_STATE, action){
    switch(action.type){
        case FETCH_POSTS:
            return { ...state, all: action.payload.data};

        default:
            return state;
    }
}