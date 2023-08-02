import {Divider, Card} from "antd"
import { Link } from 'react-router-dom';

export const SideBar = ({ singlePodcastInfoStorage }) =>{
    
    console.log(singlePodcastInfoStorage)
    return (
        <Card size="small" style={{width: 300}}>
            <Link to={`/podcast/${singlePodcastInfoStorage[0]?.id.attributes["im:id"]}`} >
                <img src={singlePodcastInfoStorage[0]?.["im:image"][2].label} alt="" style={{width: 200}}/>
            </Link>
            <Divider />
            <Link to={`/podcast/${singlePodcastInfoStorage[0]?.id.attributes["im:id"]}`} >
                <h4>{singlePodcastInfoStorage[0]?.["im:name"].label}</h4>
            </Link>
            <p>by {singlePodcastInfoStorage[0]?.["im:artist"].label}</p>
            <Divider />
            <h4>Description:</h4>
            <p>{singlePodcastInfoStorage[0]?.summary.label}</p>
        </Card>
    )
}