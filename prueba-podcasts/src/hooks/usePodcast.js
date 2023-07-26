import { useEffect, useState } from "react"
import { getPodcastDetail, getEpisodeList } from "../services/getPodcastDetail"

let parseString = require('xml2js').parseString;
export const usePodcast = (id) => {
    const [isLoading, setIsLoading] = useState(true);
    const [podcast, setPodcast] = useState()
    const [episodeList, setEpisodeList] = useState([])
    const podcastEpisodesTimeStampKey = `podcastEpisodesTimeStamp${id}`;
    const podcastEpisodesKey = `podcastEpisodes${id}`;

    const createEpisodeObject = (item, index) =>
    {
        return {
            title: item.title[0],
            date: getFormatDate(item.pubDate[0]),
            duration: item['itunes:duration'],
            id: index,
            soundContent: item['enclosure'][0]['$'].url,
            description: item['description']
        }
    }

    const getFormatDate = (stringDate) => 
    {
        const date = new Date(stringDate);

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        return `${day}/${month}/${year}`;
    }

    // const getFormatDurationString = (duration) =>{
    //     let durationString = '';
    //     let totalSecs = Number(duration);
    //     let secs = totalSecs % 60;
    //     let min = Math.floor(totalSecs / 60);

    //     if (min > 60)
    //     {
    //         let hours = Math.floor(min / 60);
    //         durationString = hours + ":" + min + ":" + secs;
    //         return durationString
    //     }

    //     durationString =  `${min}:${secs}`;
    //     return durationString
    // }

    useEffect(()=>{
        async function fetchData(){
            try{
                const newPodcast = await getPodcastDetail(id)
                setPodcast(newPodcast)
            
                const response = await getEpisodeList(newPodcast.feedUrl)
                setIsLoading(false)
                parseString(response, function (err, result) {
                    const episodeListR = result?.rss?.channel[0]?.item;

                    if (episodeListR){
                        let episodeObjectList = [];
                        let episodeIndex = 0;

                        episodeListR.forEach(i => {
                            episodeObjectList.push(createEpisodeObject(i, episodeIndex++));
                        });
                        setEpisodeList(episodeObjectList)
                        localStorage.setItem(podcastEpisodesKey, JSON.stringify(episodeObjectList));
                        localStorage.setItem(podcastEpisodesTimeStampKey, JSON.stringify((new Date()).getTime()));

                    }

                })
                
            }catch(error) {
                console.error(error);
                throw error;
            }
           
        }
        fetchData()
    },[id])

    const podcastsStorage = sessionStorage.getItem('cachedData')
    const parsedStorage = JSON.parse(podcastsStorage)
    const filteredPodcastStorage = [...parsedStorage.feed.entry].filter(p => p.id.attributes["im:id"] == id )

    return {podcast, filteredPodcastStorage, episodeList, isLoading}
}


