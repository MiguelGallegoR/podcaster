// import { useState, useEffect } from "react";
// import { getEpisodeList } from "../services/getEpisodes";
// import { readCachedData } from "../utils";

// let parseString = require('xml2js').parseString;

// export const useEpisodes = async (id, url) => {
//     const [isLoading, setIsLoading] = useState(true);

//     const [episodeList, setEpisodeList] = useState([])
//     const podcastEpisodesTimeStampKey = `podcastEpisodesTimeStamp${id}`;
//     const podcastEpisodesKey = `podcastEpisodes${id}`;

//     const createEpisodeObject = (item, index) =>
//     {
//         return {
//             title: item.title[0],
//             date: getFormatDate(item.pubDate[0]),
//             duration:item['itunes:duration'],
//             id: index,
//             soundContent: item['enclosure'][0]['$'].url,
//             description: item['description']
//         }
//     }

//     const getFormatDate = (stringDate) => 
//     {
//         const date = new Date(stringDate);

//         const day = String(date.getDate()).padStart(2, '0');
//         const month = String(date.getMonth() + 1).padStart(2, '0');
//         const year = date.getFullYear();

//         return `${day}/${month}/${year}`;
//     }

//     // const getFormatDurationString = (duration) =>{
//     //     if (!isNaN(duration)) {
//     //         let durationString = '';
//     //         let totalSecs = Number(duration);
//     //         let secs = totalSecs % 60;
//     //         let min = Math.floor((totalSecs / 60) % 60); 
//     //         let hours = Math.floor(totalSecs / 3600);
    
//     //         if (hours > 0) {
//     //             durationString = `${hours}:${min.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//     //         } else {
//     //             durationString = `${min}:${secs.toString().padStart(2, '0')}`;
//     //         }
    
//     //         return durationString;
//     //     }
    
//     //     return duration;
//     // }            

//     const readCachedEpisodes = () => {
//         return readCachedData(podcastEpisodesTimeStampKey, podcastEpisodesKey);
//     }

//     useEffect(()=>{
//         let cachedEpisodes = readCachedEpisodes();

//         if (cachedEpisodes === null){
           
//             const feedUrl = podcastDetails?.feedUrl;
//             if (feedUrl !== '' && feedUrl !== undefined){
//                 async function fetchData(){
//                     try{
//                         const response = await getEpisodeList(feedUrl)
//                         setIsLoading(false)
//                         parseString(response, function (err, result) {
//                             const episodeListR = result?.rss?.channel[0]?.item;

//                             if (episodeListR){
//                                 let episodeObjectList = [];
//                                 let episodeIndex = 0;

//                                 episodeListR.forEach(i => {
//                                     episodeObjectList.push(createEpisodeObject(i, episodeIndex++));
//                                 });
//                                 setEpisodeList(episodeObjectList)
//                                 localStorage.setItem(podcastEpisodesKey, JSON.stringify(episodeObjectList));
//                                 localStorage.setItem(podcastEpisodesTimeStampKey, JSON.stringify((new Date()).getTime()));

//                             }

//                         })
                    
//                     }catch(error) {
//                         console.error(error);
//                         throw error;
//                     }
//                 }
//                 fetchData()

//             }
//         } else {
//             setEpisodeList(cachedEpisodes);
//             setIsLoading(false)

//         }
//     },[id])

//     return {episodeList, isLoading}
// }