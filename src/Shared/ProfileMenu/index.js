import { Avatar, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProfileMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null)

    const navigate = useNavigate()
    const open = Boolean(anchorEl)
    const handeOpen = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handeClose = () => {
        setAnchorEl(null)
    }
    const handleLogout = () => {
        localStorage.clear()
        navigate('/signin')
    }
    return (
        <>
            <Avatar className='!size-9' onClick={handeOpen} />
            <Menu open={open} anchorEl={anchorEl} onClose={handeClose}>
                <MenuItem>Profile</MenuItem>
                <MenuItem onClick={handleLogout}> Logout</MenuItem>
            </Menu>
        </>
    );
}

export default ProfileMenu;
