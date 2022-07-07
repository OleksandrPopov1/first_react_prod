import {useNavigate} from "react-router-dom";

import './commentComponent.css';

function CommentComponent({comment}){
    const {postId, id, name, body, email} = comment;

    const navigator = useNavigate();

    return (
        <div className='commentBlock' onClick={() => navigator(postId.toString())}>
            <b>{id}.</b> {name} <br/>
            <b>Email:</b> {email} <br/>
            <b>Comment:</b> <br/>
            {body}
        </div>
    );
}

export {CommentComponent}