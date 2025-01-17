const Footer = () => {
    const currentYear = new Date().getFullYear()
    
    return (
        <footer className="flex justify-center gap-2" aria-label="Rodapé com informações sobre a galeria">
            <p>{currentYear}</p>
            <i class='bx bx-image bx-sm' aria-hidden="true"></i>
            <p>GALLERY | Galeria de Imagens</p>
        </footer>
    )
}

export default Footer