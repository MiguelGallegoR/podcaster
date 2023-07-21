import Header from "../components/Header"
import { SideBar } from "../components/SideBar"
import { usePodcast } from "../hooks/usePodcast"
import { useParams } from "react-router-dom"
export const Detail = () => {
    const { id } = useParams();
    const {podcast} = usePodcast(id)
    console.log(podcast)
    return (
        <>
            <Header />
            <SideBar singlePodcastInfo={podcast} />
            
        </>
       
    )
    
}