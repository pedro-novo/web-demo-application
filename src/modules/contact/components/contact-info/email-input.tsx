import React from 'react';

interface Props {
  value: string;
  onChange: (email: string) => void;
}

const EmailInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
        Email
      </label>
      <div className='mt-2'>
        <input
          type='email'
          name='email'
          id='email'
          className='block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='you@example.com'
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default EmailInput;
