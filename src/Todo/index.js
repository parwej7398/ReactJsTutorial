import { Button, Divider, IconButton, TextField } from '@mui/material';
import React, { useState } from 'react';
import CustomButton from '../Shared/CustomButton';
import { Delete } from '@mui/icons-material';

const ToDo = () => {
    const [todos, setTodos] = useState([])
    const [heading, setHeading] = useState([])
    const [content, setContent] = useState([])
    const todosFromLocal = JSON.parse(localStorage.getItem('todos'))

    const handleSubmit = (event) => {
        event.preventDefault()
        setTodos([...todos, { heading, content }])
        localStorage.setItem('todos', JSON.stringify([...todosFromLocal, { heading, content }]))
        setHeading('')
        setContent('')
    }
    const handleDelete = (index) => {
        const updatedtodos = todosFromLocal.filter((i, ind) => ind !== index)
        localStorage.setItem('todos', JSON.stringify(updatedtodos))
    }

    return (
        <div className='flex flex-col gap-4 p-5 w-full'>
            <form onSubmit={(event) => handleSubmit(event)} className='grid gap-5 lg:w-1/3 w-full'>
                <p className='text-2xl font-bold text-center'>To Do</p>
                <TextField label="Heading" type="text" placeholder='Enter To Do Heading' value={heading} fullWidth onChange={(event) => setHeading(event.target.value)} />
                <TextField label="Content" multiline rows={3} type="text" placeholder='Enter To Do Content' fullWidth value={content} onChange={(event) => setContent(event.target.value)} />
                <CustomButton type='submit'>Submit</CustomButton>
            </form>
            <div className='grid lg:grid-cols-5 gap-4'>
                {todosFromLocal.map((todo, index) => {
                    return (
                        <div key={index} className='rounded-lg flex flex-col bg-blue-200'>
                            <div className='flex justify-between items-center'>
                                <p className='p-2 font-bold'>{todo.heading}</p>
                                <IconButton size='small' color='error' onClick={() => handleDelete(index)}><Delete /></IconButton>
                            </div>
                            <Divider />
                            <p className='p-2'>{todo.content}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ToDo;
