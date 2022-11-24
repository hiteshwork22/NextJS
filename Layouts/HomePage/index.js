import React from 'react';
import {Box, Grid} from "@mui/material";
import SideView from "./SideView";
import CardLayout from "./CardLayout";

const HomeLayout = (props) => {
    const {} = props;
    return (
        <Box>
            <Grid container spacing={4}>
                <Grid item md={2.5}>
                    <SideView/>
                </Grid>
                <Grid item md={9}>
                    <CardLayout/>
                </Grid>
            </Grid>
        </Box>
    )
};
export default HomeLayout;
