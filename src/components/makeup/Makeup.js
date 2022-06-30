import "./makeup.css";
import {Details} from "../details/Details";

function Makeup({makeup, number}){

    return (
        <div className='makeupBlock'>
            {number + 1}. {makeup.name}
            <img src={makeup.image_link} alt={makeup.name}/>
            <button onClick={() => <Details
                    makeup={makeup}
                />
            }>More info</button>
        </div>
    );
}

export {Makeup}