import React, {Component} from 'react';

class Post extends Component {

    constructor(props) {
        super(props);
        this.post = this.props.post;
    }

    render() {
        return (
            <div>
                <b>{this.post.id}.</b> {this.post.title}. <br/>
                <b>Post:</b> {this.post.body}.
            </div>
        );
    }
}

export default Post;