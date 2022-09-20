import React, { ReactEventHandler, ReactNode } from "react";
// had to cast imported button as MUIButton so the names won't conflict
import { Button as MUIButton } from '@mui/material';
// import sxProp and theme from MUI for styling
import { SxProps, Theme } from '@mui/system';


//define props interface for button component
export interface Button2Props {
    /**
     * Unique identifier for component
     */
    id: string;
    /**
     * Set the background color of the button
     */
    type?:"inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning" | undefined;
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
     * Set custom styles with SxxProps and Theme components from MUI 
     */
    sx?: SxProps<Theme>;
    /**
     * Set Icon rendered at beginning/left border of button  
     */
    startIcon?: ReactNode | undefined;
    /**
     * Trigger React mouse event when cursor clicks button  
     */
    onClick?: ReactEventHandler;
}

//define initial styling for Button component
const initialBtnStyle = {
        backgroundColor: 'palette.primary.dark',
        minWidth: 20,
        maxWidth: 'fit-content',
        borderRadius: 10,
        color: 'palette.common.white',
        boxShadow: 2,
        ':hover': { backgroundColor: 'purple'}
}


//define button component passing in props
const Button2 = ({
    id,
    label,
    sx = initialBtnStyle,
    type = 'primary',
    size = 'large',
    disabled = false,
    variant = 'contained',
    startIcon,
    onClick

}: Button2Props ): JSX.Element => {
    return (
        <MUIButton
            id={id}
            size={size}
            disabled={disabled}
            variant={variant}
            sx={{
                type,
                ...sx
            }}
            onClick={onClick}
        >
            {label}
        </MUIButton>
    )
}


//export Button component
export default Button2;