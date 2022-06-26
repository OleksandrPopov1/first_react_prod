import "./characterStarWars.css"

function CharacterStarWars({character, index, choseDetails}){
    return (
        <div className="characterStarWarsBlock">
            <h2>{index + 1}. {character.name}</h2>
            <button onClick={() => {
                choseDetails(character);
            }}>Show Details</button>
        </div>
    );
}

export {CharacterStarWars}