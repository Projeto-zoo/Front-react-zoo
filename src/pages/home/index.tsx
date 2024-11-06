import { Typography } from '@mui/material';
import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const App = () => {
    return(
        <>
            <Header />
            <Typography>
                Bem vindo a Home do projeto zoo
            </Typography>
            <Footer />
        </>
        
    )
}

export default App;