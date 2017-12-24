import { combineReducers } from 'redux';
import PostReducer from './reducer_posts';
import { reducer as fromReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts : PostReducer,
  form: fromReducer
});

export default rootReducer;
