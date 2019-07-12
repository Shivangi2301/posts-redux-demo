import { FETCH_POSTS, NEW_POST, GET_POST, UPDATE_POST } from '../Actions/Types';

const initialState = {
    items: [],
    item: {},

}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case FETCH_POSTS:
            console.log("reducer", action.type);
            return {
                ...state,
                items: action.payload,
                demo: "hello",
                operation: action.type
            }            

        case NEW_POST:
            console.log("NEW_POST");
            return {
                ...state,
                item: action.payload,
                operation: action.type
            }
        case GET_POST:
            console.log("GET_POST", action);
            return {
                ...state,
                item: action.payload,
                operation: action.type
            }
        case UPDATE_POST:
            console.log("GET_POST", action);
            return {
                ...state,
                item: action.payload,
                operation: action.type
            }
        default:
            return state
    }
}