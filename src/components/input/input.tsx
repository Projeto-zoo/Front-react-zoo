import React from 'react';
import styles from './input.module.scss';
import { TextField } from "@mui/material";

interface InputProps {
    value: string | number | boolean;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    label?: string;
    type?: string;
}

const Input: React.FC<InputProps> = ({ value, onFocus, onBlur, onChange, label = "Input", type = "text" }) => {
    return (
        <TextField
            label={label}
            type={type}
            className={styles.inputTexto}
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
        />
    );
};

export default Input;
