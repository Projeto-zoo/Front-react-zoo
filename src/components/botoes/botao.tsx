import React, { ReactNode } from "react";
import styles from './botoes.module.scss';
import { Button } from '@mui/material';

interface BotoesProps {
    children: ReactNode;
    type?: "button" | "submit" | "reset";
    variant?: 'text' | 'outlined' | 'contained';
    className?: string;
    onClick?: () => void;
    fullWidth?: boolean;
}

const Botoes: React.FC<BotoesProps> = ({ children, type = "button", variant = "contained", className, onClick, fullWidth }) => {
    return (
        <Button
            variant={variant}
            className={`${styles.botaoCadastrarAnimal} ${className}`}
            type={type}
            onClick={onClick}
            fullWidth={fullWidth}
        >
            {children}
        </Button>
    );
}

export default Botoes;
