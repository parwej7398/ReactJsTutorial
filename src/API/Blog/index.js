import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BlogAPI = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate()

    const fetchPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
            res.json()
        ).then((response) => {
            setData(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    console.log(data);
    return (
        <div className='grid grid-cols-4 gap-4 bg-gray-200 p-4'>
            {data.map((post) => {
                return (
                    <div key={post.id} className='flex flex-col gap-2 rounded shadow bg-white p-2' onClick={() => navigate(`/blog-api/${post.id}`)}>
                        <p className='font-bold capitalize'>{post.title}</p>
                        <p>{post.body}</p>
                    </div>
                )
            })}</div>
    )
}

export default BlogAPI