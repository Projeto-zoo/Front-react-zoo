import React, { useState } from 'react';
import styles from './input.module.scss';
import { TextField, InputAdornment, IconButton } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface InputProps {
    value: string | number | boolean;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    label?: string;
    type?: string;
    className?: string;
}

const Input: React.FC<InputProps> = ({ value, onFocus, onBlur, onChange, label = "Input", type = "text", className }) => {
    const [showPassword, setShowPassword] = useState(false);

    // Alterna a visibilidade da senha
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <TextField
            label={label}
            type={type === "password" && !showPassword ? "password" : "text"} // Alterna entre "password" e "text" para exibir ou ocultar
            className={`${styles.inputTexto} ${className}`} // Combina a classe padrão com qualquer classe adicional
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChange}
            sx={{
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: '#838383',
                        borderRadius: '15px',
                    },
                    '&:hover fieldset': {
                        borderColor: '#838383',
                        borderRadius: '15px',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#838383',
                        borderRadius: '15px',
                    },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: '#838383',
                },
            }}
            InputProps={{
                endAdornment: type === "password" && (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label={showPassword ? 'hide password' : 'show password'}
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    );
};

export default Input;
