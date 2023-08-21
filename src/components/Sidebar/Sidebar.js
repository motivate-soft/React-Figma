import React from 'react';
import exchangeIcon from '../../assets/icons/exchange.png';
import helpIcon from '../../assets/icons/help.png';
import houseIcon from '../../assets/icons/house.svg';
import tradeIcon from '../../assets/icons/trade.png';
import Item from './Item';
import TraderMenu from './TraderMenu';

const MENU = [
  {
    id: 1,
    icon: houseIcon,
    name: 'Home',
    isActive: true,
  },
  {
    id: 2,
    icon: exchangeIcon,
    name: 'Exchange',
    isActive: false,
  },
  {
    id: 3,
    icon: tradeIcon,
    name: 'Trade History',
    isActive: false,
  },
  {
    id: 4,
    icon: helpIcon,
    name: 'Help',
    isActive: false,
  },
];

const Sidebar = () => {
  return (
    <div className='mt-10 pb-20'>
      <div>
        <div className='mb-10'>
          {MENU.map((item, index) => (
            <Item
              icon={item.icon}
              name={item.name}
              active={item.isActive}
              key={index}
            />
          ))}
        </div>
        <hr className='border border-gray-700' />
        <TraderMenu />
      </div>
    </div>
  );
};

export default Sidebar;
