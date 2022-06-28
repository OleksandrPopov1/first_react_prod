import {useState} from "react";

import './App.css';
import {Users} from "./components";
import {getAllPostsFromUser} from "./services";

function App() {

    const [posts, setPosts] = useState([]);

    const getUserPosts = (id) =>{
        getAllPostsFromUser(id).then(({data}) => setPosts([...data]));
    }

    return (
        <div>
            <div className="userPostsBlock">
                <h2 id="postUser">Posts User</h2>
                <ul>{posts.map((post, index) => {
                    return (
                        <li key={index}>
                            <b>Title:</b> {post.title}.<br/>
                            <b>Post:</b> {post. body}.
                        </li>
                    );
                })}</ul>
            </div>
            <hr/>
            <Users getUserPosts={getUserPosts}/>
        </div>
    );
}

export default App;
