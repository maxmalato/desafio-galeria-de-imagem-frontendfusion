const API_BASE_URL = "https://picsum.photos/v2/list"

export const getPhotos = async () => {
    try {
        const response = await fetch(API_BASE_URL)

        if (!response.ok) {
            throw new Error("Erro ao buscar as imagens.")
        }

        return await response.json()
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const getPhotosByID = async (id) => {
    try {
        const photos = await getPhotos()
        const photo = photos.find((p) => p.id === id.toString())

        if (!photo) {
            throw new Error("Foto não encontrada.")
        }

        return photo
    } catch (error) {
        console.error("Erro ao buscar os detalhes da foto.")
    }
}