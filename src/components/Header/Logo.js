import React, { useEffect, useState } from 'react';
import { FaGripLines, FaTimes } from 'react-icons/fa';
import Sidebar from 'react-sidebar';
import logoImg from '../../assets/images/logo.png';
import useInnerSize from '../../hook/useInnerSize';
import SidebarContent from '../Sidebar/Sidebar';

function Logo() {
  const { width } = useInnerSize();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (width >= 1024 && isOpen) {
      setIsOpen(false);
    }
  }, [width, isOpen]);
  const openMenu = () => {
    if (width < 1024) {
      setIsOpen(true);
    }
  };
  const closeMenu = () => {
    if (width < 1024) {
      setIsOpen(false);
    }
  };
  return (
    <div className='flex w-3/12 items-center justify-between border-[#23262F] px-7 xl:border-r '>
      <div className='hidden h-24 w-24 lg:block'>
        <img src={logoImg} className='h-full w-full object-contain' alt='' />
      </div>
      <p className=' text-2xl text-white' onClick={openMenu}>
        <FaGripLines />
      </p>
      <Sidebar
        sidebar={<MenuContent closeMenu={closeMenu} />}
        open={isOpen}
        onSetOpen={openMenu}
        styles={{
          sidebar: { background: 'black', position: 'fixed', zIndex: 9999 },
          root: {
            left: `-${Math.pow(10, 100000)}px`,
          },
        }}
        className='flex justify-end'
      >
        <p className=' text-2xl text-white opacity-0' onClick={openMenu}>
          <FaGripLines />
        </p>
      </Sidebar>
    </div>
  );
}

const MenuContent = ({ closeMenu }) => {
  return (
    <div className='px-5 pb-5'>
      <div className='flex w-full items-center justify-between border-[#23262F] px-7 xl:border-r'>
        <div className='h-24 w-24'>
          <img src={logoImg} className='h-full w-full object-contain' alt='' />
        </div>
        <p className=' text-2xl text-white' onClick={closeMenu}>
          <FaTimes />
        </p>
      </div>
      <SidebarContent />
    </div>
  );
};

export default Logo;
