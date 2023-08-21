import React from 'react';

const ContactUs = () => {
  return (
    <div className=' mt-20 rounded-2xl border border-[#23262F] p-5 text-white'>
      <div>
        <h2 className='mb-2 text-2xl font-medium text-white'>Contact Us</h2>
        <p className='my-4 text-sm font-medium'>
          For all inquiries, please email us using the form below
        </p>
        <button className='bg-primary-gradient-2 mt-3 block w-full rounded-2xl py-4 text-center font-bold text-black'>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
