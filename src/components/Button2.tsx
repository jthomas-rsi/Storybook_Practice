import React, { JSXElementConstructor, ReactEventHandler, ReactNode } from "react";
// had to cast imported button as MUIButton so the names won't conflict
import { Button as MUIButton } from '@mui/material';

//define props for button component
interface Button2Props {
    /**
     * Unique identifier for component
     */
    id: string;
    /**
     * Set the background color of the button
     */
    color?:"inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
    /**
     * Set the display text of the button 
     */
    label?:string;
    /**
     * Set the visual size of the button 
     */
    size?: "small" | "medium" | "large" | undefined;
    /**
     * Set ability to interact with button
     */
    disabled?: boolean;
    /**
     * 
     */
    variant?: "text" | "outlined" | "contained" | undefined;
    /**
     * Set custom styles with optional object 
     */
    sx?: object;
    /**
     * Set Icon rendered at beginning/left border of button  
     */
    startIcon?: ReactNode | undefined;
    /**
     * Set Icon rendered at beginning/left border of button  
     */
    onClick?: ReactEventHandler;
}


//define button component
const Button2 = ({
    id,
    label,
    color = 'primary',
    size = 'large',
    disabled = false,
    variant = undefined,
    sx = {},
    startIcon,
    onClick

}: Button2Props ) => {
    return (
        <MUIButton
            id={id}
            color={color}
            size={size}
            disabled={disabled}
            variant={variant}
            sx={sx}
            onClick={onClick}
        >
            {label}
        </MUIButton>
    )
}


//export Button component
export default Button2;