import { combineReducers } from 'redux';
import postReducer from './PostReducer';

console.log("index");
export default combineReducers({
    posts: postReducer
})