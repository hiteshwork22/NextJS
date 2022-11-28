import React from 'react';
import {Box, Grid} from "@mui/material";
import SideView from "./SideView";
import CardLayout from "./CardLayout";

const HomeLayout = (props) => {
    const {} = props;
    return (
        <Box>
            <Grid container spacing={4}>
                <Grid item md={4} sd={4} lg={2.5} xl={2.5} sm={5} xs={12}>
                    <SideView/>
                </Grid>
                <Grid item md={8} sd={8} lg={9} xl={9} sm={7} xs={12}>
                    <CardLayout/>
                </Grid>
            </Grid>
        </Box>
    )
};
export default HomeLayout;
