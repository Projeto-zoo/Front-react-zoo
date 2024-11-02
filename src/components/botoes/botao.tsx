import React, { Children, ReactNode } from "react";
import styles from './botoes.module.scss';
import { Button } from '@mui/material';

interface BotoesProps {
    children: ReactNode;
}

const botoes: React.FC<BotoesProps> = ({children}) => {
    return (
        <div>
            <Button variant="contained" className={styles.botaoCadastrarAnimal}> {children} </Button> 
        </div>
    )
}

export default botoes;