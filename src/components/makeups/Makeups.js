import {useEffect, useState} from "react";

import {getMakeups} from "../../services";
import {Makeup} from "../makeup/Makeup";
import "./makeups.css";

function Makeups(){

    const [makeups, setMakeups] = useState([]);

    useEffect(() => {
        getMakeups().then(({data}) => setMakeups([...data]));
    }, []);

    return (
        <div className="makeupsBlock">
            {makeups.map((makeup, index) => <Makeup
                key={index}
                makeup={makeup}
                number={index}
            />)}
        </div>
    );
}

export {Makeups}