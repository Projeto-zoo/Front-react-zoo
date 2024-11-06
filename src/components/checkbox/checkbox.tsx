import React from "react";
import { RadioButtonCheckedOutlined } from '@mui/icons-material';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const label = { inputProps: { 'aria-label': 'checkbox with custom icon' } };

interface CustomCheckBoxProps {
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: React.FC<CustomCheckBoxProps> = ({ checked, onChange }) => {
    return (
        <Checkbox
            {...label}
            checked={checked}
            onChange={onChange}
            icon={<RadioButtonUncheckedIcon style={{ fontSize: 25, color: '#8B8B8B' }} />}
            checkedIcon={<RadioButtonCheckedOutlined style={{ fontSize: 25, color: '#8B8B8B' }} />}
        />
    );
}

export default CheckBox;
