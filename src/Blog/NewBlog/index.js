import { Add, Close } from '@mui/icons-material';
import { Button, Dialog, IconButton } from '@mui/material';
import React, { useState } from 'react';

const NewBlog = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Button onClick={() => setOpen(true)} startIcon={<Add />} className='!border-2 !border-dashed'>
                New blog
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)} PaperProps={{ className: '!max-w-[50%] min-h-[400px] !w-1/2' }}>
                <div className='w-full h-fit flex justify-between '>New blog  <IconButton onClick={() => setOpen(false)}> <Close /></IconButton></div>
                <div></div>
            </Dialog>
        </>

    );
}

export default NewBlog;
