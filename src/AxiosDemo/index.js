import { Delete } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { axiosInstence1 } from '../Config/axios.config'

const AxiosDemo = () => {
    const [data, setData] = useState([])

    const getPostsFn = async () => {
        const response = await axiosInstence1.get('posts', { params: { limit: 10 } })
        console.log(response);
        setData(response.data.posts)
    }

    const addNewPost = async () => {
        await axios.post('https://dummyjson.com/posts/add', { title: "This New blogs", userId: 6 })
        alert("blog created")
    }

    const deleteblogFn = async (post_id) => {
        await axios.delete(`https://dummyjson.com/posts/${post_id}`)
        getPostsFn()
        alert("blog deleted")
    }



    useEffect(() => {
        getPostsFn()
    }, [])

    return (
        <div className='grid grid-cols-4 gap-4 p-3'>
            {data?.map((post) => (
                <div className='flex flex-col items-center gap-2 border shadow' >
                    <p>{post.title}</p>
                    <IconButton onClick={() => deleteblogFn(post.id)}><Delete /></IconButton>
                </div>

            ))}

            <button onClick={addNewPost}>Add</button>
        </div>
    )
}

export default AxiosDemo