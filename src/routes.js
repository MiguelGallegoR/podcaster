import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Episode } from "./pages/Episode";
const pathRoutes = [
    {
      path: '/',
      element: Home,
    }
    ,{
      path: `/podcast/:id`,
      element: Detail,
    },{
      path: `/podcast/:id/episode/:episodeId`,
      element: Episode,
    }
    
  ];
  
  export default pathRoutes;
  