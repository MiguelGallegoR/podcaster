import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Episode } from "./pages/Episode";
const pathRoutes = [
    {
      path: '/',
      element: Home,
    }
    ,{
      path: `/podcast/:podcastId`,
      element: Detail,
    },{
      path: `/podcast/:podcastId/episode/:episodeId`,
      element: Episode,
    }
    
  ];
  
  export default pathRoutes;
  