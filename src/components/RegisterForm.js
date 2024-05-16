import React from 'react';
import '../styles.css'; // Import the custom styles

const RegisterForm = () => {
  return (
    <div className="flex h-screen">
      <div className="left-section w-[55.375rem] relative">
      <img src="/logo.png" alt="Logo" className="mb-8 absolute top-[2.125rem] left-[2.6875rem]" />
        <div className="w-full flex flex-col items-center container">
          <img src="/svg-image.png" alt="Illustration" className="mb-8" />
          <h1 className="font-sans text-[3.75rem] font-medium leading-[4.8825rem] text-center text-custom-black mb-4">
            Royalty collections, simplified. It’s next level!
          </h1>
          <p className="font-sans text-[1.875rem] font-normal leading-[2.44125rem] text-center text-lg mb-4">Revenue based invoice collection to make royalty collection as easy as...</p>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-8 bg-[#F8F8FB] w-[51.8125rem] px-[6.25rem] py-[8.9375rem] relative container">
        <div className="w-[4.75rem] h-[1.3125rem] leading-[1.3018rem] absolute top-[2.81rem] right-[2.81rem]">
          <a href="/login" className="font-sans text-[1rem] text-right font-normal text-[#282828]">Log in {'>'}</a>
        </div>
        <div className='w-full text-left'>
          <h2 className="font-sans w-[23.6875rem] h-[2.4375rem] text-[1.875rem] font-medium leading-[2.44125rem] pb-[0.625rem]">Get started with Franchain</h2>
          <p className="font-sans w-[21.25rem] h-[1.8125rem] text-[1.375rem] font-normal leading-[1.79rem] pb-[0.625rem]">Create an account in 5 minutes.</p>
          <form className="space-y-[0.625rem] text-left">
            <div className='w-[39.3125rem] h-[7.3125rem] pt-[1.875rem] gap-[0.625rem]'>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 pb-[0.625rem]">First name</label>
              <input id="first-name" type="text" className="w-[39.3125rem] h-[3.5rem] border rounded-[0.625rem] bg-[#FDFDFF]" />
            </div>
            <div className='w-[39.3125rem] h-[6.0625rem] pt-[0.625rem] gap-[0.625rem]'>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 pb-[0.625rem]">Last name</label>
              <input id="last-name" type="text" className="w-[39.3125rem] h-[3.5rem] border rounded-[0.625rem] bg-[#FDFDFF]" />
            </div>
            <div className='w-[39.3125rem] h-[6.0625rem] pt-[0.625rem] gap-[0.625rem]'>
              <label htmlFor="business-name" className="block text-sm font-medium text-gray-700 pb-[0.625rem]">Business name</label>
              <input id="business-name" type="text" className="w-[39.3125rem] h-[3.5rem] border rounded-[0.625rem] bg-[#FDFDFF]" />
            </div>
            <div className='w-[39.3125rem] h-[6.0625rem] pt-[0.625rem] gap-[0.625rem]'>
              <label htmlFor="work-email" className="block text-sm font-medium text-gray-700 pb-[0.625rem]">Work Email</label>
              <input id="work-email" type="email" className="w-[39.3125rem] h-[3.5rem] border rounded-[0.625rem] bg-[#FDFDFF]" />
            </div>
            <div className='w-[39.3125rem] h-[8rem] pt-[0.625rem] gap-[0.625rem]'>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 pb-[0.625rem]">Password</label>
              <input id="work-email" type="password" className="w-[39.3125rem] h-[3.5rem] border rounded-[0.625rem] bg-[#FDFDFF]" />
              <p className="font-sans text-[1rem] font-normal text-sm text-[#FF4E4E] pt-[0.625rem] leading-[1.307185rem]">Password must be at least 12 characters</p>
            </div>
            <div className="w-[9rem] h-[5.8125rem] py-[1.25rem] gap-[0.625rem] pb-[0.625rem]">
              <button type="submit" className="w-[9rem] h-[3.3125rem] py-[0.9375rem] px-[2.5rem] gap-[0.9375rem] bg-[#CED6F7] text-white rounded-[3.75rem]">Sign up</button>
            </div>
          </form>
          <p className="text-xs mt-4">
            By clicking "Start Application", I agree to Mercury's
            <a href="https://www.mercury.com/legal/terms" target='_blank' className='underline' rel="noreferrer"> Terms of Use</a>,
            <a href="https://www.mercury.com/legal/policy" target='_blank' className="underline" rel="noreferrer"> Privacy Policy</a>, and
            to receive electronic communication about my accounts and services per
            <a href="https://www.mercury.com/legal/esign" target='_blank' className="underline" rel="noreferrer"> Mercury’s Electronic Communications Agreement</a>, and
            acknowledge receipt of
            <a href="https://www.mercury.com/legal/patriot-act" target='_blank' className="underline" rel="noreferrer"> Mercury’s USA PATRIOT Act disclosure</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
