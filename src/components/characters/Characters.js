import "./characters.css";
import {useEffect, useState} from "react";
import Character from "../character/Character";

export default function Characters(){

    const [characters, setCharacters] = useState([]);
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(value => value.json())
            .then(value => {
                console.log(value.results)
                setCharacters(value.results);
            })
    }, []);

    const showImageCharacter = (value) =>{
        setCharacter(value);
    }

    return (
        <div>
            {character.id && <img src={character.image} alt=""/>}
            <h1>The Rick and Morty characters</h1>
            {characters.map((character, index) => <Character
                    key={index}
                    character={character}
                    showImageCharacter={showImageCharacter}
                />
                )
            }
        </div>
    );
}