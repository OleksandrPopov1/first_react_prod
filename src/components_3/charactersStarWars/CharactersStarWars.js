import {useEffect, useState} from "react";

import "./charactersStarWars.css"
import {CharacterStarWars} from "../characterStarWars/CharacterStarWars";
import {ChoseDetails} from "../choseDetails/ChoseDetails";

function CharactersStarWars(){

    const [characters,  setCharacters] = useState([]);
    const [character, setCharacter] = useState(null)

    useEffect(() =>{
        fetch("https://swapi.dev/api/people/?page=1")
            .then(value => value.json())
            .then(value => {
                setCharacters(value.results);

            })
    }, []);

    const choseDetails = (value) =>{
        setCharacter(value);
    }

    return (
        <div>
            <h3>{character && <ChoseDetails character={character}/>}</h3>

            <div className="charactersStarWarsBlock">{characters.map((character, index) => <CharacterStarWars
                key={index}
                character={character}
                index={index}
                choseDetails={choseDetails}
            />)}</div>
        </div>
    );
}

export {CharactersStarWars}