import React, { useState } from 'react';
import { axiosInstence2 } from '../../Config/axios.config';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const SignIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginFn = async (event) => {
        event.preventDefault()
        if (password && email) {
            const response = await axiosInstence2.post('signin', { email, password })
            // console.log(response.data.message);
            // alert(response.data.message)
            toast.success(response.data.message)
            // console.log(response.data.token);
            localStorage.setItem('token', response.data.token)
            navigate('/')

        } else {

            toast.error("Please Fill All Required Fields");
            // alert("Please Fill All Required Fields")
            return
        }
    }
    return (
        <>
            <div className='flex flex-col items-center justify-center bg-gray-200 h-screen'>
                <form onSubmit={loginFn} className='flex flex-col gap-4 w-96 bg-white rounded p-4 shadow-lg'>
                    <p className='text-xl text-center font-bold'>Sign In</p>
                    <TextField id='email' type='email' size='small' label="Email" placeholder='Enter Email' onChange={(event) => setEmail(event.target.value)} />
                    <TextField id='password' type='password' size='small' label="Password" placeholder='Enter Password' onChange={(event) => setPassword(event.target.value)} />
                    <Button type='submit' variant='contained'>Sign In</Button>
                </form>

            </div>
            <div>
            </div>
        </>
    );
}

export default SignIn;
