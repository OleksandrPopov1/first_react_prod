import {useEffect, useState} from "react";

import {fetchServices} from "../../../services";
import './postComponent.css';

function PostsComponent({postId}){
    const [post, setPost] = useState([]);

    useEffect(() => {
        fetchServices.postForComment(postId).then(value => setPost(value));
    },[postId])

    return (
        <div className='postComponent'>
            <b>Post№</b> {post.id} - {post.title}<br/>
            <b>Post:</b> <br/>
            {post.body}
        </div>
    );
}

export {PostsComponent}