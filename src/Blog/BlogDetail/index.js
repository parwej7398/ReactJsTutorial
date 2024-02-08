import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const BlogDetail = () => {
    const { id } = useParams()
    const { state } = useLocation()
    console.log(id);
    console.log(state);
    return (
        <div className='flex flex-col gap-2 items-center'>
            <img src={state.imageUrl} alt="" />
            <p>{state.title}</p>
            <textarea rows={3} type="text" placeholder='Enter Comment' className='border-2 border-blue-500' />
        </div>
    );
}

export default BlogDetail;
