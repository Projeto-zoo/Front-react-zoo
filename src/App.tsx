import React from 'react';
import Button from '@mui/material/Button';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Animais from './pages/cadastro/animais'
import Habitats from './pages/cadastro/habitats'
import { Typography } from '@mui/material';

const App = () => {
  return (
    <Home />
);
}

export default App;