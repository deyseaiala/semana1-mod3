
import { createRoot } from 'react-dom/client'
import './index.css'
import routers from './routers/Router.jsx';
import {RouterProvider} from 'react-router-dom';
import { UsuariosContextProvider } from '../context/UsuariosContext.jsx';

createRoot(document.getElementById('root')).render(
 
  <UsuariosContextProvider>
  <RouterProvider router={routers}> 
  </RouterProvider>
  </UsuariosContextProvider>
)
