import { Button } from '@mui/material';
import React from 'react';

const CustomButton = ({ children, color = "success", size = "large", className = "!rounded-full", ...rest }) => {
    return (
        <Button size={size} color={color} variant='contained' className={className} {...rest}>
            {children}
        </Button>
    );
}

export default CustomButton;