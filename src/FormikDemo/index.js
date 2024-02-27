import React, { useState } from 'react'
import { useFormik } from 'formik'
import { IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { object, string } from 'yup'

const FormikDemo = () => {
    // const [name, setName] = useState('')
    const [isVisible, setIsVisible] = useState(false)


    const formik = useFormik({
        initialValues: {
            name: "",
            email: '',
            password: ''
        },
        validationSchema: object(
            {
                name: string().required("Please Enter your name").min(3, 'more than three').max(10),
                email: string().email().required(),
                password: string().required()
            }
        ),
        onSubmit: (values) => {
            console.log(values.name);
            console.log(values.email);
            console.log(values.password);
        }

    })

    // const handleSubmit = (event) => {
    //     event.preventDefault()

    //     console.log(name, "name");
    //     setName('')
    // }
    console.log(formik.errors);
    console.log(formik.isValid);

    return (
        <div className='flex flex-col h-screen justify-center items-center'>
            {/* <form onSubmit={handleSubmit} className='flex flex-col gap-5' >

                <input type="text" id='name' name='name' placeholder='XYZ' className='px-3 py-2 outline-none border border-blue-500'
                    value={name}
                    onChange={(event) => setName(event.target.value)} />

                <p>{name.length === 0 && <span className='text-xs text-red-500'>Name is required</span>}</p>

                <button type='submit' className='px-3 py-2 rounded bg-blue-500'> Submit form</button>
            </form> */}
            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-5'>

                <input type="text" name="name" id="name" onChange={formik.handleChange} className='px-3 py-2 outline-none border border-blue-500' />
                <p>{formik.errors.name}</p>
                <input type="text" name="email" id="email" onChange={formik.handleChange} className='px-3 py-2 outline-none border border-blue-500' />
                <p>{formik.errors.email}</p>
                <span className='px-3 py-2 flex items-center outline-none border border-blue-500'>
                    <input type={isVisible ? "text" : "password"} name="password" id="password" onChange={formik.handleChange} className='outline-none' />
                    <IconButton size='small' onClick={() => setIsVisible(!isVisible)}>
                        {isVisible ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </span>
                <p>{formik.errors.password}</p>
                <button type='submit' className='px-3 py-2 rounded bg-blue-500'> Submit form</button>
            </form>

        </div>
    )
}

export default FormikDemo