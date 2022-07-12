import React, {Component} from 'react';

import {CommentsService} from "../../services";
import Comment from "../comment/Comment";

class Comments extends Component {

    state = {comments: []};

    componentDidMount() {
        this.commentsService = new CommentsService();
        this.commentsService.getComments().then(({data}) => this.setState({comments: data}));
    }

    render() {
        return (
            <div>
                <h2>Comments</h2>
                {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        );
    }
}

export default Comments;