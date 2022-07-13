import React, {Component} from 'react';

import {PostsService} from "../../services";
import Post from "../post/Post";

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {posts: []};
    }

    componentDidMount() {
        this.postsService = new PostsService();
        this.postsService.getPosts().then(({data}) => this.setState({posts: data}))
    }

    render() {
        return (
            <div>
                <h2>Posts</h2>
                {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        );
    }
}

export default Posts;