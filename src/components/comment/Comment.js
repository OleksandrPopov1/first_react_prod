import React, {Component} from 'react';

class Comment extends Component {

    constructor(props) {
        super(props);
        this.comment = this.props.comment;
    }

    render() {
        return (
            <div>
                <b>{this.comment.id}.</b> {this.comment.name}. <br/>
                <b>Comment:</b> {this.comment.body}.
            </div>
        );
    }
}

export default Comment;