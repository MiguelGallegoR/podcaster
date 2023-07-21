import { Home } from "./pages/Home";
import { Podcast } from "./components/Podcast";
import { Detail } from "./pages/Detail";
const pathRoutes = [
    {
      path: '/',
      element: Home,
    }
    ,{
      path: `/podcast/:id`,
      element: Detail,
      
    }
    
  ];
  
  export default pathRoutes;
  