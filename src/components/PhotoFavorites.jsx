import { useFavorites } from "../context/FavoriteContext"
import { useNavigate } from "react-router-dom"

const PhotoFavorites = () => {
    const { photos, favorites, toggleFavorite } = useFavorites()

    const favoritePhotos = photos.filter((photo) => favorites.includes(photo.id))

    const navigate = useNavigate()
    const handlePhotoDetails = (id) => {
        navigate(`/details/${id}`)
    }

    return (
        <div className="flex flex-col items-center gap-3 md:grid grid-cols-2 lg:grid-cols-3 my-4">
            {favoritePhotos.length > 0 ? (
                favoritePhotos.map((photo) => (
                    <div
                        key={photo.id}
                        className="border-2 border-b-slate-800 p-3 rounded-md flex flex-col items-center gap-3"
                    >
                        <img
                            loading="lazy"
                            className="w-96 h-72 object-cover rounded-lg"
                            src={photo.download_url}
                            alt={`Foto do autor: ${photo.author}`}
                        />
                        <h1 className="font-semibold text-xl">{photo.author}</h1>
                        <div className="flex gap-10 mt-4">
                            <button onClick={() => handlePhotoDetails(photo.id)} className="flex items-center gap-1 border px-3 py-1 rounded-md bg-slate-100 drop-shadow-md transition-colors hover:bg-slate-200">
                                <i class='bx bxs-plus-circle bx-tada-hover bx-sm'></i>
                                <p>Informações</p>
                            </button>

                            <button onClick={() => toggleFavorite(photo.id)}>
                                {favorites.includes(photo.id) ? (
                                    <div className="flex items-center gap-1 bg-red-500 px-3 py-1 rounded-md drop-shadow-md transition-colors text-white hover:bg-slate-100 hover:text-black">
                                        <i class='bx bxs-heart'></i>
                                        <p>Desfavoritar</p>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-md drop-shadow-md transition-colors hover:text-red-500">
                                        <i class='bx bxs-heart bx-sm'></i>
                                        <p>Favoritar</p>
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>
                ))
            ) : (
                <p className="font-semibold text-lg">Nenhuma foto foi adicionada aos favoritos.</p>
            )}
        </div>
    )
}

export default PhotoFavorites
