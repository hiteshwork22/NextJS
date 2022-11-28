import React from 'react';
import {Box, Card, Container} from "@mui/material";
import SearchInput from "../../components/searchInput/SearchInput";
import Typography from "../../components/Typography";
import Avatar from '@mui/material/Avatar';
import Chip from "../../components/Chip";
import Button from "../../components/Button";

const lastMessage = [
    {
        avatarAlt: "user 1",
        userName: "kare Kertz",
        subText: "advisor",
        userTime: "(she_her)",
        image: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        chipLabel: 3
    },
    {
        avatarAlt: "user 1",
        userName: "User Name",
        subText: "User",
        userTime: "(she_her)",
        image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80",
        chipLabel: 3
    }
];

const previousMessage = [
    {
        avatarAlt: "user 1",
        userName: "Monique Smith",
        subText: "advisor",
        userTime: "(she_her)",
        image: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
        avatarAlt: "user 1",
        userName: "User Name",
        subText: "user",
        userTime: "(she_her)",
        image: "https://images.unsplash.com/photo-1569913486515-b74bf7751574?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80"
    },
    {
        avatarAlt: "user 1",
        userName: "User Name",
        subText: "user",
        userTime: "(she_her)",
        image: "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
    },
    {
        avatarAlt: "user 1",
        userName: "User Name",
        subText: "user",
        userTime: "(she_her)",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
    },
    {
        avatarAlt: "user 1",
        userName: "User Name",
        subText: "user",
        userTime: "(she_her)",
        image: "https://images.unsplash.com/photo-1626038135427-bd4eb8193ba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
];

const SideView = () => {
    return (
        <Card className='flex flex-col content-center items-center gap-2' sx={{p: 1, pb: 3, borderRadius: 3}}>
            <Container>
                <Box>
                    <SearchInput/>
                </Box>
                <Box className='flex flex-col content-start items-start gap-2' sx={{mt: 3, mb: 4}}>
                    <Typography text='Last Message' sx={{fontWeight: 700}}/>
                </Box>
                <Box className='flex-col flex' sx={{gap: 2}}>
                    {
                        lastMessage.map(item => (
                                    <Box className='flex' sx={{gap: 2}}>
                                        <Avatar sx={{ width: 56, height: 56 }} alt={`${item.avatarAlt}`} src={item.image}/>
                                        <Box className='flex' sx={{flexDirection: 'column'}}>
                                            <Typography>
                                                <span className='font-medium' style={{fontWeight: 700}}>{`${item.userName}`}</span>
                                                <span
                                                    style={{
                                                        paddingLeft: '10px',
                                                        fontSize: '14px',
                                                        color: '#828080FF'
                                                    }}>{`${item.userTime}`}</span>
                                            </Typography>
                                            <Box className='flex justify-between'>
                                                <Typography sx={{fontSize: '14px'}}
                                                            text={`${item.subText}`}/>
                                                <Chip roundChip label={`${item.chipLabel}`}/>
                                            </Box>
                                        </Box>
                                    </Box>
                            )
                        )
                    }
                </Box>
                <Box className='flex flex-col content-start items-start gap-2' sx={{mt: 3, mb: 4}}>
                    <Typography text='Previous Message' sx={{fontWeight: 700}}/>
                </Box>
                <Box className='flex-col flex' sx={{gap: 2}}>
                    {
                        previousMessage.map(item => (
                            <Box className='flex' sx={{gap: 2}}>
                                <Avatar sx={{ width: 56, height: 56 }} alt={`${item.avatarAlt}`} src={item.image}/>
                                <Box className='flex' sx={{flexDirection: 'column'}}>
                                    <Typography>
                                        <span className='font-medium' style={{fontWeight: 700}}>{`${item.userName}`}</span>
                                        <span className="text-sm"
                                            style={{
                                                paddingLeft: '10px',
                                                fontSize: '14px',
                                                color: '#828080FF'
                                            }}>{`${item.userTime}`}</span>
                                    </Typography>
                                    <Box className='flex justify-between'>
                                        <Typography sx={{fontSize: '14px'}}
                                                    text={`${item.subText}`}/>
                                    </Box>
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
                <Box className='flex justify-center' sx={{mt: 4, mb: 5}}>
                    <Button>
                        Invite New User
                    </Button>
                </Box>
            </Container>
        </Card>
    )
};
export default SideView;
