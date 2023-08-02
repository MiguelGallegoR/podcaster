import { useParams } from "react-router-dom";
import { SideBar } from "../components/SideBar"
import { usePodcast } from "../hooks/usePodcast"
import { useEpisode } from "../hooks/useEpisode";
import { Card } from "antd";
export const Episode = () => {
    const { podcastId, episodeId } = useParams();
    const {podcast, filteredPodcastStorage, episodeList} = usePodcast(podcastId)
    const {currentEpisode} = useEpisode(podcastId, episodeId)
    console.log(filteredPodcastStorage)
    const soundComponent = currentEpisode.soundContent !== '' ?
    <audio className="audio-player" controls>
        <source src={currentEpisode.soundContent}/>
    </audio>
    :
    ''

    return(
        <div className="episode-container">
            <SideBar singlePodcastInfo={podcast} singlePodcastInfoStorage={filteredPodcastStorage}/>
            <Card>
                <h4>{currentEpisode?.title}</h4>
                <div className="text-gray-600 italic p-5" dangerouslySetInnerHTML={{ __html: currentEpisode.description }}/>
                    {soundComponent}
            </Card>

        </div>
    )
}