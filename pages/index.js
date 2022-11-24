import React from 'react';
import {Box, Divider} from "@mui/material";
import Header from "../components/Header";
import HomeLayout from "../Layouts/HomePage";

export default function Home() {
    return (
        <Box className='p-4'>
            <Box className='mb-4'>
                <Header
                    title='Message'
                    btnValue='+ New Message'
                />
            </Box>
            <Divider sx={{bgcolor: '#F3C13A'}}/>
            <Box className='mt-6'>
                <HomeLayout/>
            </Box>
        </Box>
    )
}
