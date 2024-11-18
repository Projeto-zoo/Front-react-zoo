import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/inicio/login';
import Registro from './pages/inicio/registro';
import Home from './pages/home';
import Animais from './pages/cadastro/animais';
import Habitats from './pages/cadastro/habitats';
import VisualizarAnimais from './pages/visualizar/visualizarAnimais';
import VisualizarHabitats from './pages/visualizar/visualizarHabitats';
import ErrorPage from './pages/errorpage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/registro",
        element: <Registro />
      },
      {
        path: "/",
        element: <Home />
      },
      {
        path: "cadastro/animais",
        element: <Animais />
      },
      {
        path: "cadastro/habitats",
        element: <Habitats /> 
      },
      {
        path: "visualizar/animais",
        element: <VisualizarAnimais /> 
      },
      {
        path: "visualizar/habitats",
        element: <VisualizarHabitats /> 
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode> 
    <RouterProvider router={router} />
  </React.StrictMode>
);