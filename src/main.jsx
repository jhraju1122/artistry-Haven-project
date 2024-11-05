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
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/login",
        element: <Login></Login>,
        },
        {
        path: "/signup",
        element: <Signup></Signup>,
        },
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
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
