const LogoFavorite = () => {
    return (
        <div className="flex justify-between sticky top-1 z-10 bg-white rounded-lg p-3 drop-shadow-lg">
            <div className="flex items-center gap-2">
                <i class='bx bx-image bx-sm'></i>
                <p className="font-semibold">GALLERY</p>
            </div>

            <button className="flex items-center gap-2">
                <i class='bx bx-bookmark-heart bx-sm text-red-500'></i>
                <p className="transition-colors hover:text-red-500">Favoritos</p>
            </button>
        </div>
    )
}

export default LogoFavorite