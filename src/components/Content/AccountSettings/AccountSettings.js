import React from 'react';
import AccountInformation from './AccountInformation';
import FA from './FA';
import Verified from './Verified';

const AccountSettings = () => {
  return (
    <div className=''>
      <div className='mt-12'>
        <div className='gap-x-5 overflow-hidden lg:flex'>
          <div className='w-full lg:w-7/12 2xl:w-8/12'>
            <AccountInformation />
            <FA />
          </div>
          <div className='mt-10 w-full lg:mt-0 lg:w-5/12 xl:w-4/12'>
            <Verified />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
