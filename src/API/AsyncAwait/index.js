import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const AsyncAwait = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [limit, setLimit] = useState(10)

    const fetchProductsFn = async () => {
        setIsLoading(true)
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=1`)
            // console.log(await response.json());
            const res = await response.json()
            setData(res.products)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchProductsFn()
    }, [limit])

    console.log(data);
    return (
        <>  <div className='grid grid-cols-4 gap-4 p-4'>
            {isLoading ?
                <div class="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
                    <div class="rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md"></div>
                </div>
                :
                data?.map((product) => {
                    return <div className='flex flex-col gap-2 '>
                        <img src={product.thumbnail} alt="" />
                        <p>{product.title}</p>
                        <p>{product.price}</p>
                    </div>
                })}


        </div>
            <Button onClick={() => setLimit(limit + 10)}>Load More</Button></>

    )
}

export default AsyncAwait