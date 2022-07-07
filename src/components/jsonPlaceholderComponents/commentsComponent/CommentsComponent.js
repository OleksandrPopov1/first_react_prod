import {useEffect, useState} from "react";

import {fetchServices} from "../../../services";
import {CommentComponent} from "../commentComponent/CommentComponent";
import './commentsComponent.css';

function CommentsComponent(){

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchServices.comments().then(value => setComments([...value]));
    },[]);

    return (
        <div className='commentsBlock'>
            {comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)}

        </div>
    );
}

export {CommentsComponent}