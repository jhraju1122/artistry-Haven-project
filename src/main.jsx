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
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/login",
        element: <Login></Login>,
        },
        {
        path: "/signup",
        element: <Signup></Signup>,
        },
    ]
     
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
