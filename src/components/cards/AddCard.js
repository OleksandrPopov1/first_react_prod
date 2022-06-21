function AddCard(props){
    const {name, description, photo} = props;
    return (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            <img src={photo} alt=""/>
        </div>
    )
}

export default AddCard;