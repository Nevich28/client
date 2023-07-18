import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const CardMenu = ({ onCardSelect, menuItems = [] }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClickMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleSelectMenuItem = () => {
        setAnchorEl(null);
        onCardSelect();
    };

    return (
        <>
            <IconButton
                sx={{
                    position: 'absolute',
                    right: 5,
                    top: 5,
                    background: 'rgba(255, 255, 255, 0.3)',
                    '&:hover': {
                        background: 'rgba(255, 255, 255, 0.2)',
                    },
                }}
                aria-label="more"
                id="long-button"
                onClick={(e) => handleClickMenuOpen(e)}
                aria-haspopup="true">
                <MoreVertIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                open={open}
                onClose={handleClose}>
                {menuItems.map((item, index) => (
                    <MenuItem
                        key={index}
                        onClick={handleSelectMenuItem}>
                        {item}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};
