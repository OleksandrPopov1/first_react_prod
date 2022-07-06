import {useEffect, useState} from "react";

import {fetchServices} from "../../../services";
import {TodoComponent} from "../../../components";

function TodosComponent(){

    const [todos, setTodos] = useState([]);

    useEffect(() => {

        fetchServices.todos().then(value => setTodos([...value]))
    }, [])

    return (
        <div>
            {todos.map(value => <TodoComponent key={value.id} todo={value}/>)}
        </div>
    );
}

export {TodosComponent}