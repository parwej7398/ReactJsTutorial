import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NewBlog from './NewBlog';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import logo from '../image/amazon.png'

const Blog = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([
        {
            id: 1,
            imageUrl: logo,
            title: 'Some Thoughts for Tu B’Shevat',
            date: 'June 1, 2020',
            views: '2.1K views',
        },
        {
            id: 2,
            imageUrl: 'https://source.unsplash.com/200x200/?lucknow',
            title: 'Light in the Midst of the Darkness',
            date: 'June 1, 2020',
            views: '2.1K views',
        },
        {
            id: 3,
            imageUrl: 'https://source.unsplash.com/200x200/?lucknow',
            title: 'Sukkot',
            date: 'June 1, 2020',
            views: '2.1K views',
        },
        {
            id: 4,
            imageUrl: 'https://source.unsplash.com/200x200/?lucknow',
            title: 'Let Us Not Be Like Them',
            date: 'June 1, 2020',
            views: '2.1K views',
        },
        {
            id: 5,
            imageUrl: 'https://source.unsplash.com/200x200/?lucknow',
            title: 'Te nulla oportere reprimique his dolorum',
            date: 'June 1, 2020',
            views: '2.1K views',
        },
    ])

    // const blogs = JSON.parse(localStorage.getItem('blogs'))

    // useEffect(() => {
    //     localStorage.setItem('blogs', JSON.stringify(data))
    // }, [blogs])


    const token = localStorage.getItem('token')

    useEffect(() => {
        if (!token) {
            navigate('/signin')
        }
    }, [])

    console.log(token);
    return (
        <section className="py-6 sm:py-12 bg-gray-100 text-gray-800">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                    <p className="font-serif text-sm text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {data?.map((article) => (
                        <div key={article.id} className="flex relative flex-col bg-gray-50" onClick={() => navigate(`/blog/${article.id}`, { state: article })}>
                            <div rel="noopener noreferrer" aria-label={article.title}>
                                <img alt="" className="object-cover w-full h-52 bg-gray-500" src={`${article.imageUrl}/${article.id}`} />
                            </div>
                            <IconButton color='error' className='!absolute !top-1 !right-2'> <Close /></IconButton>
                            <div className="flex flex-col flex-1 p-6">
                                <p rel="noopener noreferrer" aria-label={article.title}></p>
                                <p rel="noopener noreferrer" className="text-xs tracking uppercase hover:underline text-violet-600">
                                    Convenire
                                </p>
                                <p className="flex-1 py-2 text-lg font-semibold leadi">{article.title}</p>
                                <p className='p-1'>{article?.content}</p>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                    <span>{article.date}</span>
                                    <span>{article.views}</span>
                                </div>
                                <p >{article.title}</p>
                            </div>
                        </div>
                    ))}
                    <NewBlog data={data} setData={setData} />
                </div>
            </div>
        </section>
    )
}

export default Blog