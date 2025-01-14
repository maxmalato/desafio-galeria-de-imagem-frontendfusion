import { useState, useEffect } from "react"
import { getPhotos } from "../services/api.js"
import { useFavorites } from "../context/FavoriteContext.jsx"

const PhotosList = () => {
    const { photos, setPhotos, favorites, toggleFavorite } = useFavorites()
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
    }, [setPhotos])

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
        <ul className="flex flex-col items-center gap-3 md:grid grid-cols-2 lg:grid-cols-3 my-4">
            {photos.map((item) => (
                <li
                    key={item.id}
                    className="border-2 border-b-slate-800 p-3 rounded-md flex flex-col items-center gap-3"
                >
                    <img loading="lazy" className="w-96 h-72 object-cover rounded-lg hover:animate-wiggle" src={item.download_url} alt={`Foto do autor: ${item.author}`} />
                    <h1 className="font-semibold text-xl">{item.author}</h1>
                    <div className="flex gap-10 mt-4">
                        <a href="#" className="flex items-center gap-1 border px-3 py-1 rounded-md bg-slate-100 drop-shadow-md transition-colors hover:bg-slate-200">
                            <i class='bx bxs-plus-circle bx-tada-hover bx-sm'></i>
                            <p>Informações</p>
                        </a>

                        <button onClick={() => toggleFavorite(item.id)}>
                            {favorites.includes(item.id) ? "Desfavoritar" : "Favoritar"}
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default PhotosList