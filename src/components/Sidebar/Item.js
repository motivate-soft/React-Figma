import React from 'react';

const Item = ({ name, icon, active }) => {
  return (
    <div className='sidebarMenuItem my-4'>
      <div
        className={`cursor-pointer rounded-lg px-6 py-3 ${
          active
            ? 'bg-primary-gradient text-[#131517]'
            : 'hover:bg-primary-gradient text-gray-400 hover:text-[#131517]'
        }`}
      >
        <div className='flex items-center gap-x-4'>
          <div
            className={`h-8 w-8 text-3xl ${
              active ? 'brightness-0' : ''
            }  iconWrapper`}
          >
            <img src={icon} alt='' className={`h-full w-full object-contain`} />
          </div>
          <p className='text-xl font-bold '>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
