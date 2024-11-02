import { Typography, Button } from '@mui/material';
import React from 'react';
import Header from '../../components/header/header';
import styles from './home.module.scss';
import Botao from '../../components/botoes/botao';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.divHomeEsquerda}>
                    <img src="/macaco_home.png" alt="Descrição da imagem" className={styles.imgBackground} />
                </div>
                <div className={styles.divHomeDireita}>
                    <Link to="/">
                        <Botao>Cadastrar Animal</Botao>
                    </Link>
                    <Link to="/">
                        <Botao>Cadastrar Habitat</Botao>
                    </Link>
                    <Link to="/">
                        <Botao>Visualizar Animais</Botao>
                    </Link>
                    <Link to="/">
                        <Botao>Visualizar Habitats</Botao>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default App;
