export const getEpisodeList = async (url) => {
    try{
        const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`${url}`)}`)
        const json = await res.json()
        const data = await json.contents
        return data
    
       
    
    }catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
}