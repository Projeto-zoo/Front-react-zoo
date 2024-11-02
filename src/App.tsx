import React from 'react';
import Button from '@mui/material/Button';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Animais from './pages/cadastro/animais'
import Habitats from './pages/cadastro/habitats'

const App = () => {
  return (
    <Routes>
      <Route path='/cadastro' element={<Home />}>
        <Route path='animais' element={< Animais />}/>
        <Route path='habitats' element={<Habitats />}/>
      </Route>
    </Routes>
  );
}

export default App;
