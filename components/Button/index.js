import React from 'react';
import {Button as MuiButton} from "@mui/material";

const Button = (props) => {
    const {value, size = "medium", variant = "contained", children} = props;
    return (
        <MuiButton variant={variant} size={size} sx={{
            backgroundColor: '#763568 !important',
            color: '#fff'
        }}>
            {value || children}
        </MuiButton>
    );
};
export default Button;
