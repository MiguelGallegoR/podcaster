import {Divider, Card} from "antd"

export const SideBar = ({singlePodcastInfo}) =>{
    return (
        <Card>
            <img src={singlePodcastInfo.artworkUrl600} alt="" />
            <Divider />
            <h4>{singlePodcastInfo.collectionName}</h4>
            <p>by {singlePodcastInfo.artistName}</p>
            <Divider />
            <h4>Description:</h4>
            
        </Card>
    )
}