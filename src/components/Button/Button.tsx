import React, { FC, ReactNode, useState } from 'react'

enum Color {
    red = 'red',
    blue = 'blue',
    white = 'white',
}

enum BackgroundColor {
    transparent = 'transparent',
}

type Colors = keyof typeof Color
type BackgroundColors = keyof typeof BackgroundColor

type ButtonProps = {
    color?: Colors
    backgroundColor?: BackgroundColors
    children: ReactNode
    isActive?: boolean
    onClick?: () => void
}

export const Button: FC<ButtonProps> = ({
    color,
    backgroundColor = BackgroundColor.transparent,
    children,
    isActive,
    onClick,
}) => {
    const buttonStyle = {
        backgroundColor: isActive ? '#1E88E5' : backgroundColor,
        color: color,
        width: '120px',
        height: '100%',
        cursor: 'pointer',
        border: 'none',
    }

    return (
        <button style={buttonStyle} onClick={onClick}>
            {children}
        </button>
    )
}
