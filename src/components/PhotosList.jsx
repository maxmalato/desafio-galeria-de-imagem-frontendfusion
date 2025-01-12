import { useState, useEffect } from "react"
import { getPhotos } from "../services/api.js"

const PhotosList = () => {
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const result = await getPhotos()
                setPhotos(result)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchPhotos()
    }, [])

    if (loading) {
        return (
            <div className="flex gap-2 justify-center items-center">
                <i class='bx bx-loader-circle bx-tada bx-sm'></i>
                <p className="font-semibold">Carregando..</p>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                <p>Error: {error}</p>
            </div>
        )
    }

    return (
        <ul>
            {photos.map((item) => (
                <li key={item.id}>{item.author}</li>
            ))}
        </ul>
    )
}

export default PhotosList