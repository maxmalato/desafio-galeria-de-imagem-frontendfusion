import { useState, useEffect } from "react"
import { getPhotos } from "../services/api.js"
import { useFavorites } from "../context/FavoriteContext.jsx"
import Footer from "./Footer.jsx"

import { useNavigate } from "react-router-dom"

const Home = () => {
    const { photos, setPhotos, favorites, toggleFavorite } = useFavorites()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const navigate = useNavigate()
    const handlePhotoDetails = (id) => {
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const result = await getPhotos()
                setPhotos(result)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchPhotos()
    }, [setPhotos])

    if (loading) {
        return (
            <div className="flex gap-2 justify-center items-center mt-10" role="status" aria-live="polite">
                <i class='bx bx-loader-circle bx-tada bx-sm'></i>
                <p className="font-semibold">Carregando..</p>
            </div>
        )
    }

    if (error) {
        return (
            <div role="alert">
                <p>Error: {error}</p>
            </div>
        )
    }

    return (
        <>
            <main>
                <header className="text-center my-6">
                    <h1 className="text-3xl font-bold">Galeria de Fotos</h1>
                    <p className="text-lg mt-2">Explore fotos incríveis de autores talentosos!</p>
                </header>


                <section className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 items-center gap-3 my-4" aria-labelledby="photo-gallery">
                    {photos.map((item) => (
                        <article
                            key={item.id}
                            className="border-2 border-b-slate-800 p-3 rounded-md flex flex-col items-center gap-3"
                            aria-labelledby={`photo-${item.id}`}
                        >
                            <img loading="lazy" className="w-96 h-72 object-cover rounded-lg" src={item.download_url} alt={`Foto do autor: ${item.author}`} />
                            <h2 className="font-semibold text-xl">{item.author}</h2>
                            <div className="flex justify-around w-full mt-4">
                                <button aria-label={`Ver mais informações sobre a foto de ${item.author}`} role="button" onClick={() => handlePhotoDetails(item.id)} className="flex items-center gap-1 border px-3 py-1 rounded-md bg-slate-100 drop-shadow-md transition-colors hover:bg-slate-200">
                                    <i class='bx bxs-plus-circle bx-tada-hover bx-sm'></i>
                                    <p>Informações</p>
                                </button>

                                <button onClick={() => toggleFavorite(item.id)}>
                                    {favorites.includes(item.id) ? (
                                        <div className="flex items-center gap-1 bg-red-500 px-3 py-1 rounded-md drop-shadow-md transition-colors text-white hover:bg-slate-100 hover:text-black">
                                            <i class='bx bxs-heart bx-sm' aria-hidden="true"></i>
                                            <p>Desfavoritar</p>
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-md drop-shadow-md transition-colors hover:text-red-500">
                                            <i class='bx bxs-heart bx-sm' aria-hidden="true"></i>
                                            <p>Favoritar</p>
                                        </div>
                                    )}
                                </button>
                            </div>
                        </article>
                    ))}
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home