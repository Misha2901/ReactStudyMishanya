import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import './style.css'

function Photos() {
    const params = useParams();
    const id = params.id;
    const [photo, setPhotos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const apiUrl = `https://jsonplaceholder.typicode.com/albums/${id}/photos`;
        axios.get(apiUrl).then((resp) => {
            const photo = resp.data;
            setLoading(false)
            setPhotos(photo)
        })
    }, [setLoading, setPhotos, id])
    return (
        <div className='photos'>
            {loading && <div>Loading</div>}
            {photo.map((photo) => {
                return (
                    <div className='photo'>
                        <div className='img'>
                            <img className='img1' src={photo.url} alt='albums' />
                        </div>
                    </div>
                )
            })}
        </div >
    )


}
export default Photos;