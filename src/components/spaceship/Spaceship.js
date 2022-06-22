export default function Spaceship({spaceship}){
    console.log(spaceship)
    return (
        <div>
            <h3>{spaceship.mission_name}</h3>
            <p>{spaceship.launch_year}</p>
            <img src={spaceship.links.mission_patch_small} alt={spaceship.mission_name}/>
        </div>
    );
}