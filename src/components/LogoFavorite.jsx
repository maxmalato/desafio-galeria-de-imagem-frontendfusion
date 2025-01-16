import { useNavigate } from "react-router-dom"

const LogoFavorite = () => {
    const navigate = useNavigate()
    const handleToFavorites = () => navigate("/favorites")
    const handleToPhotoList = () => navigate("/")

    return (
        <div className="flex justify-between sticky top-1 z-10 bg-white rounded-lg p-3 drop-shadow-lg">
            <button onClick={handleToPhotoList} className="flex items-center gap-2">
                <i class='bx bx-image bx-sm'></i>
                <p className="font-semibo">GALLERY</p>
            </button>

            <button onClick={handleToFavorites} className="flex items-center gap-2">
                <i class='bx bx-bookmark-heart bx-sm text-red-500'></i>
                <p className="transition-colors hover:text-red-500">Favoritos</p>
            </button>
        </div>
    )
}

export default LogoFavorite