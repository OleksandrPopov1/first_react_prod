import {useEffect, useState} from "react";
import {getMakeups} from "../../services";

function Makeups(){

    const [makeups, setMakeups] = useState([]);

    useEffect(() => {
        getMakeups().then(({data}) => setMakeups([...data]));
    }, []);

    return (
        <div>
            {makeups.map(makeup)}
        </div>
    );
}

export {Makeups}