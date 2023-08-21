import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import focusIcon from '../../../assets/icons/focus.png';
import idIcon from '../../../assets/icons/id.png';
import locationIcon from '../../../assets/icons/location.png';
import userIcon from '../../../assets/icons/user.png';
const DATA = [
  {
    id: 1,
    icon: <img src={userIcon} alt='' />,
    title: 'Personal information',
  },
  {
    id: 2,
    icon: <img src={idIcon} alt='' />,
    title: 'Goverment-issued ID',
  },
  {
    id: 3,
    icon: <img src={focusIcon} alt='' />,
    title: 'Facial recognition',
  },
  {
    id: 4,
    icon: <img src={locationIcon} alt='' />,
    title: 'Proof Location',
  },
];
const Verified = () => {
  return (
    <div className='w-full '>
      <div className='rounded-xl bg-[#18191D] p-6'>
        <h4 className='text-lg font-medium text-gray-200'>Verified</h4>
        <div className='mt-4'>
          <div>
            {DATA.map((item, index) => (
              <Item icon={item.icon} title={item.title} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Item = ({ icon, title }) => {
  return (
    <div className='my-5 flex items-center justify-between gap-x-4'>
      <div className='flex items-start gap-x-3'>
        <div className='flex items-center gap-x-1 text-2xl text-gray-400'>
          {icon}
        </div>
        <p className='text-sm text-gray-400'>{title}</p>
      </div>

      <div className=' flex w-8 items-center gap-x-1 text-2xl text-primary-1'>
        <FaCheckCircle />
      </div>
    </div>
  );
};

export default Verified;
