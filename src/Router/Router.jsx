import { createBrowserRouter } from 'react-router';
import Home from '../Component/Home/Home';
import Login from '../Component/Login/Login';
import Orders from '../Component/Orders/Orders';
import ProfilePage from '../Component/ProfilePage/ProfilePage';
import Register from '../Component/Register/Register';
import Root from '../Component/Root/Root';

const Router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
       {
        path: "/",
        element:<Home></Home>
       },
       {
        path:"/login",
        element:<Login></Login>

       },
       {
        path:"/Register",
        element:<Register></Register>
       },
       {
        path:"/orders",
        element:<Orders></Orders>
       },
       {
        path:"/ProfilePage",
        element:<ProfilePage></ProfilePage>
       }
    ]
   
  },
]);

export default Router;