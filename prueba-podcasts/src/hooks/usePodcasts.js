import { useEffect, useMemo, useState } from "react"
import { getPodcasts } from "../services/getPodcasts"
export const usePodcasts = (search) => {
    const [podcasts, setPodcasts] = useState()
    useEffect(()=>{
       getPodcasts().then(newPodcasts => setPodcasts(newPodcasts))
       localStorage.setItem(`podcasts`, JSON.stringify(podcasts));
    },[])

    const filteredPodcasts = useMemo(()=>{
        return search.trim() === '' ? podcasts
        : [...podcasts].filter(p => p.title.label.toLowerCase().includes(search) || p["im:artist"].label.toLowerCase().includes(search))
         
    },[podcasts, search])
    return {filteredPodcasts, setPodcasts}
}


  