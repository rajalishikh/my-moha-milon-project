import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import Authprovider from './Authprovider/Authprovider'
import './index.css'
import Router from './Router/Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Authprovider>
    <RouterProvider router={Router} />
   </Authprovider>
  </StrictMode>,
)
