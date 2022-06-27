import {useEffect, useState} from "react";
import {getUsers} from "../../services";
import {User} from "../user/User";

function Users(){

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])

    return (
        <div>
            {users.map(user => <User
                key={user.id}
                user={user}
            />)}
        </div>
    );
}

export {Users}