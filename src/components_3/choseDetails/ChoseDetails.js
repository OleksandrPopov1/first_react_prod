import "./choseDetails.css";

function ChoseDetails({character}){
    console.log(character)

    return (
        <div className="choseDetailsBlock">
            <p><span>Height - {character.height}</span>
                <span>Mass - {character.mass}</span>
                <span>Hair color - {character.hair_color}</span>
                <span>Eye color - {character.eye_color}</span>
                <span>Birth year - {character.birth_year}</span>
                <span>Gender - {character.gender}</span>
            </p>
        </div>
    );
}

export {ChoseDetails}

// "height": "172",
//     "mass": "77",
//     "hair_color": "blond",
//     "skin_color": "fair",
//     "eye_color": "blue",
//     "birth_year": "19BBY",
//     "gender": "male",