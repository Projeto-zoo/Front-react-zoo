import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Animais from './pages/cadastro/animais';
import Habitats from './pages/cadastro/habitats';
import Login from './components/login/login';
import Registro from './components/register/register';
import Register from './components/register/register';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} /> {/* Redirecionamento para login */}
    </Routes>
  );
};

export default App;
