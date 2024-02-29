import React, { useState } from 'react';

const AddNewProduct = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [discount, setDiscount] = useState("")
    const handleSubmit = async (event) => {
        event.preventDefault()
        const reqbody = {
            title: name,
            price,
            discountPercentage: discount
        }
        try {
            const response = await fetch('https://dummyjson.com/products/add', {
                method: "POST",
                headers: { 'Content-Type': 'application/json', "Authorization": localStorage.getItem('token') },
                body: JSON.stringify(reqbody)
            })
            const data = await response.json()
            console.log(data);
        } catch (error) {
            console.log(error);
        }

        // console.log(reqbody, 'reqbody');
    }
    return (
        <div className='flex flex-col gap-5 p-5'>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 *:rounded *:p-2 *:border p-3'>
                <input type="text" placeholder='Product Name' onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder='Product Price' onChange={(e) => setPrice(e.target.value)} />
                <input type="text" placeholder='Product Discount' onChange={(e) => setDiscount(e.target.value)} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default AddNewProduct;
