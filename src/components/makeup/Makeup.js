import "./makeup.css";
import {Details} from "../details/Details";
import {useState} from "react";

function Makeup({makeup, number}){

    const [makeupDetails, setMakeupDetails] = useState(null);

    const choseMakeupDetails = (item => {
        setMakeupDetails(item);
    });

    return (
        <div className='makeupBlock'>
            {number + 1}. {makeup.name}
            <img src={makeup.image_link} alt={makeup.name}/>
            {makeupDetails && <Details makeup={makeup}/> }
            <button onClick={() => {
                choseMakeupDetails(makeup)
            }}>More info</button>
        </div>
    );
}

export {Makeup}