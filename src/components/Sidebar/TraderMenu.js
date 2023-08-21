import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import ContactUs from './ContactUs';
import TraderItem from './TraderItem';

const DATA = [
  {
    id: 1,
    name: 'Lenci Jencken',
    image:
      'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600',
    isActive: true,
  },
  {
    id: 2,
    name: 'Levey Pisculli',
    image:
      'https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600',
    isActive: true,
  },
  {
    id: 3,
    name: 'Pietra Bouzan',
    image:
      'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600',
    isActive: true,
  },
  {
    id: 4,
    name: 'Abbe Clowley',
    image:
      'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600',
    isActive: true,
  },
  {
    id: 5,
    name: 'Kristan Pithie',
    image:
      'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600',
    isActive: true,
  },
  {
    id: 6,
    name: 'Beale Olliffe',
    image:
      'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600',
    isActive: false,
  },
  {
    id: 7,
    name: 'Rois Hadley',
    image:
      'https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?auto=compress&cs=tinysrgb&w=600',
    isActive: false,
  },
  {
    id: 8,
    name: 'Erena Weekly',
    image:
      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    isActive: false,
  },
  {
    id: 9,
    name: 'Rennie Ervin',
    image:
      'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600',
    isActive: true,
  },
  {
    id: 10,
    name: 'Teddy Cherrington',
    image:
      'https://images.pexels.com/photos/3866555/pexels-photo-3866555.png?auto=compress&cs=tinysrgb&w=600',
    isActive: false,
  },
];

function TraderMenu() {
  return (
    <div>
      <h4 className='mt-7 text-gray-600'>Active Trader</h4>
      <div className='mt-5'>
        {DATA.slice(0, 6).map((item) => (
          <TraderItem
            key={item.id}
            name={item.name}
            isActive={item.isActive}
            img={item.image}
          />
        ))}
      </div>
      <div className='mt-5 flex cursor-pointer items-center gap-x-3 '>
        <div className='flex h-9 w-9 items-center justify-center rounded-full bg-gray-700 text-lg'>
          <FaAngleDown className='text-xl text-gray-400' />
        </div>
        <p className='text-[#808191]'>Load more</p>
      </div>
      <ContactUs />
    </div>
  );
}

export default TraderMenu;
