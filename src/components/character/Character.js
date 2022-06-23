import "./character.css";

export default function Character({character, showImageCharacter}){
    return (
        <div className="characterBlock">
            <h2>{character.id}. {character.name}</h2>
            <p>{character.species} {character.gender} {character.status}</p>
            <button onClick={() =>{
                showImageCharacter(character);
            }}>Show image</button>
        </div>
    );
}