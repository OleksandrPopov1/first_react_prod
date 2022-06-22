import {useEffect, useState} from "react";
import Spaceship from "../spaceship/Spaceship";
import "./spaceships.css"

export default function Spaceships(){

    const [spaceships, setSpaceships] = useState([]);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches/")
            .then(value => value.json())
            .then(value => {
                setSpaceships(value.filter(item => item.launch_year !== "2020"));
            })
    },[])
    console.log()

    return (
        <div>
            {spaceships.map((spaceship, index) => <Spaceship
                key={index}
                spaceship={spaceship}
            />)}

        </div>
    );
}