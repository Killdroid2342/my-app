import React, { useState } from 'react';

const PasswordGen = () => {
  document.title = 'Password Generator';
  const [password, setPassword] = useState('');

  const getRandomPassword = () => {
    // let test = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let max = `99999999`;
    setPassword(Math.floor(Math.random() * max));
  };
  return (
    <div className='flex flex-col items-center justify-center my-auto  '>
      <div className=' border-2 border-white w-1/2 rounded-md flex flex-col items-center pb-24'>
        <h1 className='font-bold text-3xl text-white mt-10'>
          Password Generator
        </h1>
        <p className='border-2 border-white text-white p-3 rounded-2xl mt-10 font-bold '>
          {password}
        </p>
        <button
          onClick={getRandomPassword}
          className='rounded-lg border-2 border-white text-white mt-14 p-2 font-bold'
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PasswordGen;
