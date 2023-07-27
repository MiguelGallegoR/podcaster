import { Card } from 'antd';
import { Link } from 'react-router-dom';

export const Podcast = ({podcastInfo}) => {
    return (
        <Card hoverable>
            <Link to={`/podcast/${podcastInfo.id.attributes["im:id"]}`} >
                <li key={podcastInfo.id.attributes["im:id"]}>
                    <img src={podcastInfo["im:image"][2].label} alt="" />
                    <h3>{podcastInfo.title.label}</h3>
                    <p>{podcastInfo["im:artist"].label}</p>
                </li>
            </Link>
        </Card>
    )
}