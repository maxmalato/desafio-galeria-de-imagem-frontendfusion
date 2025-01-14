import { useFavorites } from "../context/FavoriteContext"

const PhotoFavorites = () => {
    const { photos, favorites } = useFavorites()

    const favoritePhotos = photos.filter((photo) => favorites.includes(photo.id))

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
                    </div>
                ))
            ) : (
                <p className="font-semibold text-lg">Nenhuma foto foi adicionada aos favoritos.</p>
            )}
        </div>
    )
}

export default PhotoFavorites
