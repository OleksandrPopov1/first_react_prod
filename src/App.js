
import './App.css';
import AddCardRickAndMorty from "./components/character/AddCard";

function App() {
    return (
        <div>
            <AddCardRickAndMorty
            id={1}
            name={"Rick Sanchez"}
            status={"Alive"}
            species={"Human"}
            gender={"Male"}
            image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}
            />

            <AddCardRickAndMorty
                id={2}
                name={"Morty Smith"}
                status={"Alive"}
                species={"Human"}
                gender={"Male"}
                image={"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}
            />

            <AddCardRickAndMorty
                id={3}
                name={"Summer Smith"}
                status={"Alive"}
                species={"Human"}
                gender={"Female"}
                image={"https://rickandmortyapi.com/api/character/avatar/3.jpeg"}
            />

            <AddCardRickAndMorty
                id={4}
                name={"Beth Smith"}
                status={"Alive"}
                species={"Human"}
                gender={"Female"}
                image={"https://rickandmortyapi.com/api/character/avatar/4.jpeg"}
            />

            <AddCardRickAndMorty
                id={13}
                name={"Alien Googah"}
                status={"unknown"}
                species={"Alien"}
                gender={"unknown"}
                image={"https://rickandmortyapi.com/api/character/avatar/13.jpeg"}
            />

        </div>
    );
}

export default App;
