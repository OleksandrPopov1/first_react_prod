import './albumComponent.css';


function AlbumComponent({album}){
    const {id, userId, title} = album;
    return (
        <div className='albumComponent'>
            <b>User№</b> {userId} <br/>
            <b>{id}.</b> {title} <br/>
        </div>
    );
}

export {AlbumComponent}