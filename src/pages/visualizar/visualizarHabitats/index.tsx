import React, { useState } from 'react';
import http from "../../../http";
import { Animal } from "../../../interface/animais";
import Header from '../../../components/header/header';
import Grid from '../../../components/gridHabitats';
import Botao from '../../../components/botoes/botao';
import styles from './visualizacao.module.scss';
import { Link } from 'react-router-dom';
import { Button, Typography, Icon, Stack } from '@mui/material';

const VisualizarHabitats = () => {
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

export default VisualizarHabitats;