import React from 'react'
import { useNavigate } from 'react-router-dom';
import NewBlog from './NewBlog';

const Blog = () => {
    const navigate = useNavigate()
    const articlesData = [
        {
            id: 1,
            imageUrl: 'https://source.unsplash.com/200x200/?lucknow',
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

    ];
    return (
        <section className="py-6 sm:py-12 bg-gray-100 text-gray-800">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
                    <p className="font-serif text-sm text-gray-600">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {articlesData.map((article) => (
                        <article key={article.id} className="flex flex-col bg-gray-50" onClick={() => navigate(`/blog/${article.id}`, { state: article })}>
                            <a rel="noopener noreferrer" aria-label={article.title}>
                                <img alt="" className="object-cover w-full h-52 bg-gray-500" src={`${article.imageUrl}/${article.id}`} />
                            </a>
                            <div className="flex flex-col flex-1 p-6">
                                <a rel="noopener noreferrer" aria-label={article.title}></a>
                                <a rel="noopener noreferrer" className="text-xs tracking uppercase hover:underline text-violet-600">
                                    Convenire
                                </a>
                                <h3 className="flex-1 py-2 text-lg font-semibold leadi">{article.title}</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                    <span>{article.date}</span>
                                    <span>{article.views}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                    <NewBlog />
                </div>
            </div>
        </section>
    )
}

export default Blog