import React from 'react';
import {Box, Chip as MuiChip} from "@mui/material";

const Chip = (props) => {
    const {label, roundChip, variant, onClick, ...restProps} = props;
    return (
        <>
            {roundChip ?
                <Box sx={{
                    borderRadius: '50%',
                    bgcolor: '#87cefa',
                    height: '20px',
                    width: '20px',
                    fontSize: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {label}
                </Box>
                :
                <MuiChip label={label} variant={variant} onClick={onClick} {...restProps}/>
            }
        </>);
};
export default Chip;
