import {createBrowserRouter, Navigate } from 'react-router-dom';

import Login from '../pages/login';
import Home from '../pages/home';
import PaginaPrivada from '../pages/PaginaPrivada';



let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado")) || false;

const PrivateRoute = (children) => {
	return usuarioLogado ? children : <Navigate to="/login" />
}

const routers = createBrowserRouter ([
    {
        path: "/login",
        element: <Login />

    },
    {
        path: "/",
        element: <Home />

    },
    {
        path: "/",
        element: ( <PrivateRoute>
        <PaginaPrivada/> </PrivateRoute>),
        }
])

export default routers;