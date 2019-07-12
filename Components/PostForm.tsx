import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { createPost, updatePost } from '../Actions/PostActions';

export interface Istate {
    title: any,
    body: any
}

class PostForm extends Component<any, Istate> {
    componentDidMount() {
        console.log("componentDidMount: ", this.props)
    }
    componentWillReceiveProps(recievedPorps: any) {
        console.log("PostForm recievedPorps: ", recievedPorps)
        // if (Object.values(recievedPorps.post).length > 0) {
        //     this.setState({
        //         title: recievedPorps.post.title,
        //         body: recievedPorps.post.body
        //     })
        // }
        if (recievedPorps.operation == "GET_POST") {
            this.setState({
                title: recievedPorps.newPost.title,
                body: recievedPorps.newPost.body
            })
        }
    }
    constructor(props: any, state: Istate) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }

    onInputChange = (e: any) => {
        var aa: any = {};
        aa[e.target.name] = e.target.value;
        console.log("on Input Change", aa);
        
        if (e.target.value != null) {
            this.setState(aa);
        }
    }

    onFormSubmit = (e: any) => {
        console.log("on form submit", this.props);
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        // Axios.post('https://jsonplaceholder.typicode.com/posts',
        //     { post })
        //     .then(res => console.log(res.data))

        //instead call action

        switch (this.props.operation) {
            case "FETCH_POSTS":
                console.log("create");
                this.props.createPost(post);
                break;
            case "GET_POST":
                console.log("update");
                this.props.updatePost(post,this.props.newPost.id);
                break;
        }
    }
    render() {
        console.log("POSt", this.props);
        console.log("state value: ", this.state)
        return (
            <>
                <h3 style={{textAlign:"center"}}>
                    PostForm Component
                </h3>
                <form onSubmit={this.onFormSubmit}>
                    <label>
                        Title:
                        </label>
                        <br />
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.onInputChange}
                    />
                    <br />
                    <label>
                        Body:
                        </label>
                    <br />
                    <textarea
                        name="body"
                        value={this.state.body}
                        onChange={this.onInputChange}
                        rows={5}
                    />
                    <br />
                    <input type="submit" />
                </form>
            </>
        )
    }
}
const mapStateToProps = (state: any) => ({
    newPost: state.posts.item,
    operation: state.posts.operation
})
export default connect(mapStateToProps, { createPost, updatePost })(PostForm);
