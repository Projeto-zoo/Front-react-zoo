import React, { useState } from 'react';
import http from "../../../http";
import { Animal } from "../../../interface/animais";
import Header from '../../../components/header/header';
import Grid from '../../../components/gridAnimais';
import Botao from '../../../components/botoes/botao';
import styles from './visualizacao.module.scss';
import { Link } from 'react-router-dom';
import { Button, Typography, Icon, Stack } from '@mui/material';

const VisualizarAnimais = () => {
    return(
      < >
        <Header />
        <div className={styles.container}>
          <div className={styles.container_grid}>
            <Grid />
          </div>
        </div>
      </>
    );
};

export default VisualizarAnimais;