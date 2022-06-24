import { useState, useEffect } from "react";
import axios from "axios";
import './styles.css';

function Albums() {

    const [albums, setAlbums] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const apiUrl = 'https://jsonplaceholder.typicode.com/albums';
        axios.get(apiUrl).then((resp) => {
            const albums = resp.data;
            setLoading(false)
            setAlbums(albums)
        })
    }, [setLoading, setAlbums])

    return (
        <div className="albums">
            {loading && <div>Loading!</div>}
            {
                albums.map((album) => {
                    return (
                        <div className="album">
                            <div>Id : {album.id}</div>
                            <div>Title : {album.title}</div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Albums;