import React from 'react';
import {Box} from "@mui/material";
import Button from "../Button";
import Typography from "../Typography";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Header = (props) => {
    const {icon, title, btnValue} = props;
    return (
        <Box className="flex items-center justify-between">
            <Box className="flex items-center">
                <MailOutlineIcon style={{ color: "#F3C13A", height: "35px", width: "35px" }}/>
                <Typography sx={{color: '#F3C13A', fontsize: '20px'}} variant='h5' className="pl-3" text={title}/>
            </Box>
            {btnValue &&
                <Button>
                    {btnValue}
                </Button>
            }
        </Box>
    )
};
export default Header;
