import React from 'react';
import {Box, Card} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import Typography from "../../components/Typography";
import Chip from "../../components/Chip";
import Input from "../../components/Input";

const image =  "https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
const data = [
    {
        avatarAlt: "user 1",
        userName: "kare Kertz",
        subText: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
        userTime: "9:45 pm",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
        avatarAlt: "user 1",
        userName: "kare Kertz",
        subText: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
        userTime: "9:45 pm",
        image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    },
    {
        avatarAlt: "user 1",
        userName: "kare Kertz",
        subText: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
        userTime: "9:45 pm",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
    },
    {
        avatarAlt: "user 1",
        userName: "kare Kertz",
        subText: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition",
        userTime: "9:45 pm",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        chipLabel: "New Message"
    }
];

const CardLayout = () => {
    return (<Card sx={{borderRadius: 3}}>
        <Box sx={{background: '#fffdd0', p: 2, pl: 3}} className='p-3'>
            <Box className='flex items-center' sx={{gap: 2}}>
                <Avatar sx={{ width: 56, height: 56 }} alt='Kare Kertz' src={image}/>
                <Box className='flex-col flex' sx={{flexDirection: 'column'}}>
                    <Typography>
                        <span className='font-medium' style={{fontWeight: 700}}>Kare Kertz</span>
                        <span
                            style={{
                                paddingLeft: '10px',
                                fontSize: '12px',
                                color: '#828080FF'
                            }}>(she_her)</span>
                    </Typography>
                    <Typography sx={{fontSize: '14px'}} text='Advisor'/>
                </Box>
            </Box>
        </Box>
        <Box className='flex flex-col items-center gap-2 mt-2' sx={{my: 2}}>
            <Box className='flex flex-col content-center justify-center' sx={{justifyContent: 'center'}}>
                <Chip label='Monday 7, November 2022'/>
            </Box>
            <Box className='w-100'>
                {
                    data.map(item => (
                        <Box className='flex' sx={{gap: 2, p: 2, pl: 3}}>
                            <Avatar sx={{ width: 56, height: 56 }} alt={`${item.avatarAlt}`} src={item.image}/>
                            <Box className='flex-col flex' sx={{flexDirection: 'column', gap: 2}}>
                                <Typography>
                                    <span className='font-medium' style={{fontWeight: 700}}>{`${item.userName}`}</span>
                                    <span
                                        style={{
                                            paddingLeft: '10px',
                                            fontSize: '14px',
                                            color: '#828080FF'
                                        }}>{`${item.userTime}`}</span>
                                    {
                                        item.chipLabel &&
                                        <Chip label='New Message' sx={{bgcolor: '#87cefa', ml: 2}}/>
                                    }
                                </Typography>
                                <Typography sx={{fontSize: '14px'}} text={`${item.subText}`}/>
                            </Box>
                        </Box>
                    ))
                }
            </Box>
        </Box>
        <Box sx={{p: 2, height: "150px"}}>
            <Box className='flex justify-between' sx={{border: '1px solid #D3D3D3', borderRadius: 3, pt: 1, px: 1}}>
                <Input
                    maxWidth='100%' sx={{
                    width: '100%',
                    "& fieldset": {border: 'none'},
                }}/>
            </Box>
        </Box>
    </Card>)
};
export default CardLayout;
