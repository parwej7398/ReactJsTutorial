import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BlogDetailAPI = () => {
    const [data, setData] = useState({})
    const { blog_id } = useParams()



    const fetchPost = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${blog_id}`).then(res => res.json()).then((res) => {
            console.log(res);
            setData(res)
        })
    }

    useEffect(() => {

        fetchPost()
    }, [])

    window.scrollTo({ top: 0, behavior: 'smooth' })


    return (
        <div className='flex flex-col items-center p-5 gap-5'>
            <p className='text-2xl font-semibold'>{data.title}</p>
            <p>{data.body}</p>


            <Button className='!fixed !z-50 bottom-10' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to Top</Button>
        </div>
    )
}

export default BlogDetailAPI