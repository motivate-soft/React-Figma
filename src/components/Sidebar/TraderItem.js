import React from 'react';

const TraderItem = ({ img, name, isActive = false }) => {
  return (
    <div className='my-5 flex items-center justify-between text-[#808191]'>
      <div className='flex  items-center gap-x-3'>
        <div className='h-9 w-9 overflow-hidden rounded-full'>
          <img src={img} className='h-full w-full object-cover' alt='' />
        </div>
        <p className=' text-lg'>{name}</p>
      </div>
      <div className={`h-3 w-3 rounded-full bg-[#7FBA7A]  `}></div>
    </div>
  );
};

export default TraderItem;
