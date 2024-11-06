import React, { ReactNode } from "react";
import styles from './botoes.module.scss';
import { Button } from '@mui/material';

interface BotoesProps {
    children: ReactNode;
    type?: "button" | "submit" | "reset"; // Adiciona a prop `type` opcional com os tipos permitidos
}

const Botoes: React.FC<BotoesProps> = ({ children, type = "button" }) => {
    return (
        <div>
            <Button variant="contained" className={styles.botaoCadastrarAnimal} type={type}>
                {children}
            </Button>
        </div>
    );
}

export default Botoes;
