import {useEffect, useState} from "react";

import "./users.css";
import {getUsers} from "../../services";
import {User} from "../user/User";

function Users({getUserPosts}){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        //data - деструктиризуєм з об'єкта, який приходить з axios
        getUsers().then(({data}) =>{
            setUsers([...data])})

    }, [])

    return (
        <div className="usersBlock">
            {users.map(user => <User
                key={user.id}
                user={user}
                getUserPosts={getUserPosts}
            />)}
        </div>
    );
}

export {Users}