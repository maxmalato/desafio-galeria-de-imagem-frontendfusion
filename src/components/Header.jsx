import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()
    const handleToFavorites = () => navigate("/favorites")
    const handleToPhotoList = () => navigate("/")

    return (
        <header className="flex justify-between sticky top-1 z-10 bg-white rounded-lg p-3 drop-shadow-lg" aria-label="Cabeçalho principal com navegação">
            <nav className="flex justify-between w-full" aria-label="Navegação principal">
                <button onClick={handleToPhotoList} className="flex items-center gap-2" aria-label="Ir para a galeria de fotos">
                    <i class='bx bx-image bx-sm' aria-hidden="true"></i>
                    <p className="font-semibo">GALLERY</p>
                </button>

                <button onClick={handleToFavorites} className="flex items-center gap-2" aria-label="Ir para a página de favoritos">
                    <i class='bx bx-bookmark-heart bx-sm text-red-500' aria-hidden="true"></i>
                    <p className="transition-colors hover:text-red-500">Favoritos</p>
                </button>
            </nav>
        </header>
    )
}

export default Header