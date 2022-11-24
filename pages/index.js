import {Box, Container, Divider} from "@mui/material";
// import {MailOutlineOutlined} from '@material-ui/icons';
import Header from "../components/Header";
import HomeLayout from "../Layouts/HomePage";

export default function Home() {
    return (
        <Box className='p-4'>
            <Box className='mb-4'>
                <Header
                    // icon={<MailOutlineOutlined/>}
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
