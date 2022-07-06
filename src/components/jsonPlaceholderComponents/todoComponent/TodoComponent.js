function TodoComponent({todo}){
    const {id, userId, title, completed} = todo;
    return (
        <div>
            <div>
                User№ {userId} <br/>
                {id}. {title} <br/>
                Status: {completed.toString()}
            </div>
        </div>
    );
}

export {TodoComponent}