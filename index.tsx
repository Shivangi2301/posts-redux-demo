import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import './style.css';
import Posts from './Components/Posts';
import PostForm from './Components/PostForm';


interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Provider store={configureStore()}>
      <div>        
        <h2 style={{ textAlign: "center" }}>Demo using Redux</h2>
          <PostForm />
          <hr />
          <Posts />
      </div>
       </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
