const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <div className="flex justify-center gap-2">
            <p>{currentYear}</p>
            <i class='bx bx-image bx-sm'></i>
            <p>GALLERY | Galeria de Imagens</p>
        </div>
    )
}

export default Footer