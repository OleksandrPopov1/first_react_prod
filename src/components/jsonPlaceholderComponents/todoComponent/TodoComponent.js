import './todoComponent.css';

function TodoComponent({todo}){
    const {id, userId, title, completed} = todo;
    return (
        <div className='todoBlock'>
            <b>User№</b> {userId} <br/>
            <b>{id}.</b> {title} <br/>
            <b>Status:</b> {completed.toString()}
        </div>
    );
}

export {TodoComponent}