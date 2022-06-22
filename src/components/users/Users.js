import {useEffect, useState} from "react";
import User from "../user/User";

export default function Users(){

    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            })
    },[])

    const choseUserDetails = (item =>{
        setUserDetails(item);
    })

    return (
        <div>
            {userDetails.id && <div>
                <p>{userDetails.name} - {userDetails.username} <br/>
                    Email: {userDetails.email} <br/>
                    Address: {userDetails.address.street} {userDetails.address.suite} {userDetails.address.city}</p>

            </div>}
            <h2>Users from jsonplaceholder</h2>
            {users.map((user, index) => <User
                key={index}
                user={user}
                choseUserDetails={choseUserDetails}
            />)}
        </div>
    );
}