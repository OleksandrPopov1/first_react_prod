import {useParams} from "react-router-dom";

import {PostsComponent} from "../../components";

function PostsPage(){

    const {postId} = useParams();

    return (
        <div>
            <PostsComponent postId={postId}/>
        </div>
    );
}

export {PostsPage}