import React from 'react';
import { Typography as MuiTypography } from "@mui/material";

const Typography = ( props ) => {
    const {
        text, children, variant, typoStyle, gutterBottom, sx,...restProps
    } = props;
    return (
        <MuiTypography
            sx={sx}
            variant={variant}
            gutterBottom={gutterBottom}
            {...restProps}
        >
            {text || children}
        </MuiTypography>
    );
};
export default Typography;
