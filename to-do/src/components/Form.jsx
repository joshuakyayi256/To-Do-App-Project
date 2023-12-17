import React from 'react';
import { useState } from 'react';

export  const Form = ({addHandler}) => {
    const [item, setItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addHandler(item);
        setItem("");
    }
    

    return (
       <div className='bg-white py-2 px-3 rounded-md'>
        <form onSubmit={handleSubmit} className='flex item-center'>
           <div className='w-full'>
            <input
             required value={item}
             onChange={(e) => setItem(e.target.value)}
             type='text' className='w-full rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' placeholder='Add new todo'/>
           </div>
           <button type='submit' className='text-white bg-gradient-to-br from purple-600'>Add</button>
        </form>
       </div>
    )
}