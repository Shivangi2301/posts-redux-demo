import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './Reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

console.log("Store");
// const initialState = {};
// const middleWare: any = [thunk];

// // previous store
// // const store = createStore(() => { }, undefined , applyMiddleware())
// const store = createStore(
//     rootReducer,
//     initialState,
//     composeWithDevTools(
//         applyMiddleware(...middleWare),
//         // Window.__REDUX__DEVTOOLS_EXTENSION__ && Window.__REDUX__DEVTOOLS_EXTENSION__()       
//     )
// )

// export default store;

// optimized code
export default function configureStore() {
    const initialState = {};
    const middlewares = [thunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const enhancers = [middlewareEnhancer];
    const composedEnhancer = composeWithDevTools(...enhancers);
    const store = createStore(
        rootReducer,
        initialState,
        composedEnhancer
    );
    return store;
}
