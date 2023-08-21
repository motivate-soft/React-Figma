import React from 'react';
import { FaGoogle, FaMobileAlt } from 'react-icons/fa';

const FA = () => {
  return (
    <div className='mt-10'>
      <div className='rounded-xl bg-[#18191D] p-6'>
        <h4 className='text-lg font-medium text-gray-200'>2FA</h4>
        <div>
          <Item
            icon={<FaGoogle />}
            title={'Google Authentication'}
            subTitle={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
          />
          <Item
            icon={<FaMobileAlt />}
            title={'SMS Authentication'}
            subTitle={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
          />
          <Item
            icon={<FaMobileAlt />}
            title={'Email Authentication'}
            subTitle={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
          />
        </div>
      </div>
    </div>
  );
};

const Item = ({ icon, title, subTitle }) => {
  return (
    <>
      <div className='mt-7 gap-x-4 sm:hidden'>
        <div className='flex flex-1 items-start gap-x-3'>
          <div className='mt-2 flex items-center gap-x-1 text-2xl text-white'>
            {icon}
          </div>
          <h4 className='text-lg font-medium text-gray-200'>{title}</h4>
        </div>

        <p className='my-3 text-sm text-gray-600'>{subTitle}</p>

        <button className='bg-primary-gradient mx-auto mt-2 block w-full cursor-pointer rounded-lg px-6 py-3 text-sm text-[#131517] '>
          Active
        </button>
      </div>
      <div className='mt-7 hidden items-center gap-x-4 sm:flex'>
        <div className='flex flex-1 items-start gap-x-3'>
          <div className='mt-2 flex items-center gap-x-1 text-2xl text-white'>
            {icon}
          </div>
          <div className=''>
            <h4 className='text-lg font-medium text-gray-200'>{title}</h4>
            <p className='text-sm text-gray-600'>{subTitle}</p>
          </div>
        </div>

        <div className='w-24'>
          <button className='btn w-full cursor-pointer rounded-lg px-6 py-3 text-sm text-[#131517] '>
            Active
          </button>
        </div>
      </div>
    </>
  );
};

export default FA;
