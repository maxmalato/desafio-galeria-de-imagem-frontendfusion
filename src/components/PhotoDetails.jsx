import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getPhotosByID } from "../services/api.js"

const PhotoDetails = () => {
    const { id } = useParams()
    const [photoId, setPhotoId] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPhotoId = async () => {
            try {
                const responseId = await getPhotosByID(id)
                setPhotoId(responseId)
            } catch (error) {
                console.error("Erro ao carregar a foto.", error)
            } finally {
                setLoading(false)
            }
        }

        fetchPhotoId()
    }, [id])

    if (loading) {
        return (
            <main className="flex gap-2 justify-center items-center mt-10" aria-busy="true">
                <i class='bx bx-loader-circle bx-tada bx-sm' aria-hidden="true"></i>
                <p className="font-semibold">Carregando..</p>
            </main>
        )
    }

    if (!photoId) {
        return (
            <main className="flex justify-center items-center mt-10">
                <p className="font-semibold">Foto não encontrada.</p>
            </main>
        )
    }

    return (
        <main className="flex flex-col items-center mt-4 gap-3">
            <img className="w-96 h-72 md:w-3/4 md:h-80 object-cover rounded-lg hover:animate-pulse" src={photoId.download_url} alt={`Foto do autor: ${photoId.author}`} />
            <h1 className="font-semibold text-xl">{photoId.author}</h1>
            <div className="flex gap-4 border p-2 rounded-lg transition-colors hover:bg-slate-100" aria-label="Dimensões da imagem">
                <p><span className="font-semibold">Largura: </span>{photoId.width}px</p>
                <p><span className="font-semibold">Altura: </span>{photoId.height}px</p>
            </div>

            <a className="border px-3 py-2 rounded-lg bg-red-500 text-white flex gap-2 items-center transition-colors hover:bg-red-600" href={photoId.url} target="_blank" rel="noopener noreferrer" aria-label={`Saiba mais sobre a foto tirada por ${photoId.author}`}>
                <p>Saiba mais</p>
                <i class='bx bx-link-alt bx-tada bx-sm' aria-hidden="true"></i>
            </a>
        </main>
    )
}

export default PhotoDetails