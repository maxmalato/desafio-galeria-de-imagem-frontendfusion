export const getPhotos = async () => {
    const response = await fetch("https://picsum.photos/v2/list")
    
    if (!response.ok) {
        throw new Error ("Erro ao buscar os dados")
    }

    return response.json()
}