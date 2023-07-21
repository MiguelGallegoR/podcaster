import { useEffect, useState } from "react"
import { getPodcastDetail } from "../services/getPodcastDetail"
export const usePodcast = (id) => {
    const [podcast, setPodcast] = useState()
    useEffect(()=>{
        getPodcastDetail(id).then(newPodcast => setPodcast(newPodcast))
    },[id])
    return {podcast}
}

