import React from 'react';

export const FilterSection = () => {
  return (
    <div className='text-[#494C6B] text-sm  flex justify-center gap-8 border-[#d2d3de]'>
        <button type="button" className="focus:font-bold">All</button>
        <button type="button" className="focus:font-bold">Active</button>
        <button type="button" className="focus:font-bold">Completed</button>
    </div>
  );
}