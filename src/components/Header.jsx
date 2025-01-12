import Combobox from "./Combobox"

const Header = () => {
    return (
        <header className="flex flex-col gap-2 md:items-center">
            <div className="border-2 rounded-md p-2 flex justify-between items-center mt-5 max-w-3/4 md:w-96">
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