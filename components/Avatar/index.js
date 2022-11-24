import React from 'react';
import Avatar from '@mui/material/Avatar';

const AvatarIcon = (props) => {
    const {alt, src} = props;
    return (
        <Avatar  alt={alt} src={src}/>
    )
};
export default Avatar;
