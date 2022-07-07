import {useEffect, useState} from "react";

import {fetchServices} from "../../../services";
import {TodoComponent} from "../../../components";
import './todosComponent.css';

function TodosComponent(){

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchServices.todos().then(value => setTodos([...value]))
    }, []);

    return (
        <div className='todosComponent'>
            {todos.map(todo => <TodoComponent key={todo.id} todo={todo}/>)}
        </div>
    );
}

export {TodosComponent}