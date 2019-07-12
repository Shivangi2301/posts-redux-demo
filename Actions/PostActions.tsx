import { FETCH_POSTS, NEW_POST, GET_POST, UPDATE_POST } from './Types';
import axios from 'axios';

// export function fetchPosts(){
export const fetchPosts = () => (dispatch: any) => {
    console.log("fetching...");
    // return function(dispatch: any){
    // function(dispatch: any){    
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>
            dispatch({
                type: FETCH_POSTS,
                payload: response.data
            }));

    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    //     .then(posts => dispatch({
    //         type: FETCH_POSTS,
    //         payload: posts
    //     }))
}
// }

export const createPost = (postData: any) => (dispatch: any) => {
    console.log("create post called")
    axios.post('https://jsonplaceholder.typicode.com/posts',
        { postData })
        // .then(res => console.log(res.data))   
        .then(res => dispatch({
            type: NEW_POST,
            payload: res.data.postData
        })
        )
}

export const getPost = (id: any) => (dispatch: any) => {
    console.log("get post called", id);

    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(response =>
            // console.log("response: ", response.data)
            dispatch({
                type: GET_POST,
                payload: response.data
            }));
    // );
}

export const updatePost = (postData: any, id: any) => (dispatch: any) => {
    console.log("update post called", postData);
    axios.put('https://jsonplaceholder.typicode.com/posts/' + id,
        { postData })
        // .then(res => console.log(res.data.postData))   
        .then(res => dispatch({
            type: UPDATE_POST,
            payload: res.data.postData
        })
        )
}