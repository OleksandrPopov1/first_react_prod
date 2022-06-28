import "./user.css";

function User({user, getUserPosts}){
    return (
        <div className="userBlock">
            <h2>{user.id}. {user.name}</h2>
            <button onClick={() =>{
                getUserPosts(user.id);
                document.location.href = "#postUser";
            }}>Show posts</button>
        </div>
    );
}

export {User}