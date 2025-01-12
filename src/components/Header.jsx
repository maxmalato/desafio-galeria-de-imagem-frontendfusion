import Combobox from "./Combobox"

const Header = () => {
    return (
        <header className="flex flex-col gap-2">
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                    <i class='bx bx-image bx-sm'></i>
                    <p className="font-semibold">GALLERY</p>
                </div>

                <button className="flex items-center gap-2">
                    <i class='bx bx-bookmark-heart bx-sm'></i>
                    <p>Favoritos</p>
                </button>
            </div>

            <div className="border-2 rounded-md p-2 flex justify-between items-center mt-5 max-w-3/4">
                <input type="text" placeholder="Pesquisar imagem" className="outline-none w-full" />
                <i className='bx bx-search bx-sm cursor-pointer'></i>
            </div>

            <div className="self-start">
                <Combobox />
            </div>
        </header>
    )
}

export default Header