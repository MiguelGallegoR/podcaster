export const getPodcastDetail = async(id) => {
    try{
        const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${id}`)}`)
        const json = await res.json()
        const data = await json
        const contents = data.contents
        const results = JSON.parse(contents)
        return results.results[0]
    
    }catch (error) {
        console.error('Error al realizar la solicitud:', error);
    }
    
}
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