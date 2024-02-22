import React, { useState } from 'react';
import { axiosInstence2 } from '../../Config/axios.config';

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await axiosInstence2.post('signup', { name, email, password })
            console.log(response.data.message);
            console.log(response.data.token);
            alert(response.data.message)
            localStorage.setItem('token', response.data.token)
        } catch (error) {
            console.error(error.response.data.message);
            alert(error.response.data.message)
        }

    }

    const isLogin = Boolean(localStorage.getItem('token'))
    console.log(isLogin);
    return (
        <div className='flex flex-col gap-3 p-4'>
            <form onSubmit={handleSubmit} className='flex flex-col *:border *:border-blue-500 gap-3'>
                <input type="text" name="" id="" onChange={(event) => setName(event.target.value)} placeholder='Enter Name' />
                <input type="email" name="" id="" onChange={(event) => setEmail(event.target.value)} placeholder='Enter Email' />
                <input type="password" name="" id="" onChange={(event) => setPassword(event.target.value)} placeholder='Enter Password' />
                <button type='submit'>Submit</button>
            </form>

            <p> Status : {isLogin ? 'logged in' : "logged out"}</p>
            <button onClick={() => localStorage.clear()}>Logout</button>
        </div>
    );
}

export default SignUp;
