import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
 
import Signup from './components/SignUp/Signup';
import Login from './components/Login/login';
import ErrorPage from './Errorpage/ErrorPage';
import Buy from './components/Buy/Buy';
import PrivateRoute from './components/routes/PrivateRoute';
import DetailsItems from './components/DetailsItemsPage/DetailsItems';
import AddCraftItems from './components/AddCraftItems/AddCraftItems';
import UpdateItems from './components/UpdateItems/UpdateItems';
import CraftItems from './components/Craft-Items/CraftItems';
// import AuthProvider from './AuthProvider/AuthProvider';
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: () =>fetch('http://localhost:5000/craft'),
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      
      
        {
        path: "/buy",
        element: <Buy></Buy> ,
        },
       
        {
          path: "/private",
          element: <PrivateRoute> </PrivateRoute>,
        },
    ]
     
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
    },
  {
    path: "/craftItems",
    element: <CraftItems></CraftItems>,
    },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/detailsItems",
      element:  <DetailsItems></DetailsItems> ,
     },
    {
      path: "/addCraftItems",
      element:  <AddCraftItems></AddCraftItems> ,
     },
    {
      path: "/updateItems",
      element: <UpdateItems></UpdateItems> ,
     },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
