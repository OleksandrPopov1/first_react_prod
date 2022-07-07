import {useEffect, useState} from "react";

import {fetchServices} from "../../../services";
import {AlbumComponent} from "../albumComponent/AlbumComponent";
import './albumsComponent.css';

function AlbumsComponent(){

    const [album, setAlbum] = useState([]);

    useEffect(() => {
        fetchServices.albums().then(value => setAlbum([...value]));
    }, []);

    return (
        <div className='albumsComponent'>
            {album.map(album => <AlbumComponent key={album.id} album={album}/>)}
        </div>
    );
}

export {AlbumsComponent}