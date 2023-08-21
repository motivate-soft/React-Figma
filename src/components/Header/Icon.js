import React from 'react';

function Icon({ icon, name, value }) {
  return (
    <div>
      <div className='relative inline-flex cursor-pointer items-center rounded-lg p-3 text-center  text-sm  font-medium text-white  '>
        <span className='text-3xl'>{icon}</span>
        <span className='sr-only'>{name}</span>
        <div className='absolute -top-2 -right-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FF544D] text-xs font-bold text-white '>
          {value}
        </div>
      </div>
    </div>
  );
}

export default Icon;
