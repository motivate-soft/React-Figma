import React from 'react';
import AccountSettings from './AccountSettings/AccountSettings';

const Content = () => {
  return (
    <div>
      <div className='p-5 xl:p-10'>
        <h2 className='text-2xl font-bold text-white '>Account Setting</h2>
        <AccountSettings />
      </div>
    </div>
  );
};

export default Content;
