import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, getPost } from '../Actions/PostActions';

export interface IState {
  posts: any
}

class Posts extends Component<any, IState> {
  constructor(props: any, state: IState) {
    super(props);
    this.state = {
      posts: [] as any[]
    }
  }
  componentWillMount() {
    console.log("props:", this.props);
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextPorps: any) {
    console.log("componentWillReceiveProps: ", this.props)
    console.log("componentWillReceiveProps123: ", nextPorps)

    if (nextPorps.operation == "NEW_POST") {
      console.log("next props")
      this.props.posts.unshift(nextPorps.newPost);
    }
    else if (nextPorps.operation == "UPDATE_POST") {
      console.log("UPDATE_POST", this.props.newPost)
      console.log("filter: ", this.props.posts.findIndex((i: any) => i.id == nextPorps.newPost.id))
      var a = this.props.posts.findIndex((i: any) => i.id == this.props.newPost.id);
      this.props.posts[a] = nextPorps.newPost;
    }
  }

  onPostEdit = (id: any) => {
    console.log("onPostEdit: ", this.props, id)
    this.props.getPost(id);
  }
  render() {
    console.log("demo: ", this.props.demo)
    const postItems = this.props.posts.map((item: any) => (
      <div key={item.id}>
        <h3>
          {item.title}
        </h3>
        <p>
          {item.body}
        </p>
        <button onClick={() => this.onPostEdit(item.id)}>Edit</button>
      </div>
    ))
    return (
      <React.Fragment>
        <h3 style={{ textAlign: "center" }}>
          Posts Component
        </h3>
        {postItems}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state: any) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
  demo: state.posts.demo,
  operation: state.posts.operation
})

export default connect(mapStateToProps, { fetchPosts, getPost })(Posts);