import React, { useState } from 'react'

const UnControlled = () => {
    const [image, setImage] = useState(null)
    const age = 20
    const handleSubmit = (event) => {
        event.preventDefault()

        const formdata = new FormData(document.getElementById('info'))

        formdata.append('age', age)

        console.log(formdata.get('name'));
        console.log(formdata.get('mobile'));
        console.log(formdata.get('email'));
        console.log(formdata.get('age'));
        setImage(formdata.get('image'))
        console.log(formdata.get('image'));
        // for (const value of formdata.get()) {
        //     console.log(value);
        // }
    }
    const img = image ? URL.createObjectURL(image) : null

    // console.log(URL.createObjectURL(image));
    console.log(img);
    return (
        <><form id='info' onSubmit={handleSubmit} className='p-5 flex flex-col gap-5 *:border-2 *:rounded *:p-2 *:outline-none'>
            <input type="file" name='image' />
            <input type="text" name='name' id='name' placeholder='Enter Name' />
            <input type="number" name='mobile' id='mobile' placeholder='Enter Mobile' />
            <input type="email" name='email' id='email' placeholder='Enter Email' />
            <button type='submit'>Submit</button>
        </form>
            <div>
                <img src={img} alt="" />
                <button className='hover:bg-blue-500'>Guygdyugyue</button>
            </div>
        </>

    )
}

export default UnControlled