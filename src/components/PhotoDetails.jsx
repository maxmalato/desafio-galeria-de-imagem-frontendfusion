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

    if (loading) return <p>Carregando...</p>
    if (!photoId) return <p>Produto não encontrado</p>

    return (
        <div className="flex flex-col items-center mt-4 gap-3">
            <img className="w-96 h-72 md:w-3/4 md:h-96 object-cover rounded-lg hover:animate-wiggle" src={photoId.download_url} alt={`Foto do autor: ${photoId.author}`} />
            <h1 className="font-semibold text-xl">{photoId.author}</h1>
            <div className="flex gap-4 border p-2 rounded-lg transition-colors hover:bg-slate-100">
                <p><span className="font-semibold">Largura: </span>{photoId.width}</p>
                <p><span className="font-semibold">Altura: </span>{photoId.height}</p>
            </div>

            <a className="border px-3 py-2 rounded-lg bg-red-500 text-white flex gap-2 items-center transition-colors hover:bg-red-600" href={photoId.url} target="_blank">
                <p>Saiba mais</p>
                <i class='bx bx-link-alt bx-tada bx-sm' ></i>
            </a>
        </div>
    )
}

export default PhotoDetails