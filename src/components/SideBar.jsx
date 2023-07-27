import {Divider, Card} from "antd"

export const SideBar = ({singlePodcastInfo, singlePodcastInfoStorage }) =>{
    return (
        <Card size="small" style={{width: 300}}>
            <img src={singlePodcastInfo?.artworkUrl600} alt="" style={{width: 200}}/>
            <Divider />
            <h4>{singlePodcastInfo?.collectionName}</h4>
            <p>by {singlePodcastInfo?.artistName}</p>
            <Divider />
            <h4>Description:</h4>
            <p>{singlePodcastInfoStorage[0]?.summary.label}</p>
        </Card>
    )
}