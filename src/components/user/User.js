import './user.css'
export default function User({user, choseUserDetails}){
    return (
        <div className={"wrap"}>
            <p><b>{user.id}.</b> {user.name}</p> 
            <button onClick={() => {
                choseUserDetails(user);
            }}>Details</button>
        </div>
    );
}