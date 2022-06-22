function AddCardRickAndMorty(props){
    const {id, name, status, species, gender, image} = props;
    return (
        <div>
            <h2>{id} {name}</h2>
            <h3>{status}</h3>
            <p><b>Species:</b> {species} <b>Gender:</b> {gender}</p>
            <img src={image} alt={name}/>
        </div>
    )
}

export default AddCardRickAndMorty;
