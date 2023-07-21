import {Divider} from "antd"
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <div>
            <Link to="/">
                <h2>Podcaster</h2>
                <Divider/>
            </Link>
           
        </div>
    )
}