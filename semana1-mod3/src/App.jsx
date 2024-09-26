import { Outlet } from 'react-router-dom';
import './App.css'
import { UsuariosContextProvider } from '../context/UsuariosContext';
//import Login from './pages/login';



function App() {
    return(
       
        <UsuariosContextProvider>
        <Outlet></Outlet>
        </UsuariosContextProvider>
        
    )
}

export default App;