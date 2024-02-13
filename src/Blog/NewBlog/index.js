import { Add, Close } from '@mui/icons-material';
import { Button, Dialog, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';

const NewBlog = ({ data, setData }) => {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        setData([...data, {
            id: 1,
            imageUrl: 'https://source.unsplash.com/200x200/?lucknow',
            title: title,
            content: content,
            date: 'June 1, 2020',
            views: '2.1K views'
        }])
        // localStorage.setItem('blogs', JSON.stringify([...data, {
        //     id: 1,
        //     imageUrl: 'https://source.unsplash.com/200x200/?lucknow',
        //     title: title,
        //     content: content,
        //     date: 'June 1, 2020',
        //     views: '2.1K views'
        // }]))
        setOpen(false)
    }

    console.log(data);

    return (
        <>
            <Button onClick={() => setOpen(true)} startIcon={<Add />} className='!border-2 !border-dashed'>
                New blog
            </Button>
            <Dialog open={open} onClose={() => setOpen(false)} PaperProps={{ className: '!max-w-[40%] min-h-[400px] !w-1/2' }}>
                <div className='w-full h-fit flex justify-between '>New blog  <IconButton onClick={() => setOpen(false)}> <Close /></IconButton></div>
                <form onSubmit={handleSubmit} className='flex flex-col gap-3 p-5'>
                    <TextField label="Title" placeholder='Enter Title' value={title} onChange={(event) => setTitle(event.target.value)} />
                    <TextField multiline rows={4} label="Content" placeholder='Enter Content' value={content} onChange={(event) => setContent(event.target.value)} />
                    <Button variant='contained' type='submit'>Submit</Button>
                </form>
            </Dialog>
        </>

    );
}

export default NewBlog;
