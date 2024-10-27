import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Single from "./pages/Single";
import Write from './pages/Write.jsx';

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/post/:id",
        element:<Single/>
      },
      {
        path:"/Write",
        element:<Write/>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <RouterProvider router={router}/>
    
  </StrictMode>,
)
