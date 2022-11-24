import React from 'react';
import { styled } from "@mui/material/styles";
import {FormControl, TextField} from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';

const CustomHeight = styled(TextField)(({ theme }) => ({
    "& .MuiOutlinedInput-input": {
        minHeight: 60
    }
}));

const Input = (props) => {
    const {
        required, isError, placeholder,
        errorMsg, disabled, value, type, label, sx, maxWidth,
        multiline, rows, maxRows, ...restProps
    } = props;
    return (
        <FormControl sx={{maxWidth: maxWidth || "28.5rem", width: "100%"}}>
            <TextField
                required={required}
                label={label}
                fullWidth
                type={type}
                value={value}
                error={isError}
                disabled={disabled}
                multiline={multiline}
                rows={rows}
                maxRows={maxRows}
                sx={sx}
                placeholder={placeholder}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AttachFileIcon />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="start">
                            <SendIcon />
                        </InputAdornment>
                    )
                }}
                {...restProps}
            />
        </FormControl>
    );
};
export default Input;
