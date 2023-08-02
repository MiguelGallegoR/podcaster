import { useEffect, useState } from "react"
import { readCachedData } from "../utils";
export const useEpisode = (podcastId, episodeId) => {

    const podcastEpisodesTimeStampKey = `podcastEpisodesTimeStamp${podcastId}`;
    const podcastEpisodesKey = `podcastEpisodes${podcastId}`;
    const [currentEpisode, setCurrentEpisode] = useState(
        {
            soundContent: '',
            title: '',
            description: ''
        });
    
    const readCahedPodcastEpisodes = () => {
        return readCachedData(podcastEpisodesTimeStampKey, podcastEpisodesKey);
    }
        
    useEffect(() => {
            const cachedEpisodes = readCahedPodcastEpisodes();
            const episodeInfo = cachedEpisodes.find(e => e.id == episodeId);
            setCurrentEpisode(episodeInfo)
    }, [])
    
    return {currentEpisode}
}