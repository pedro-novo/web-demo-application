import React from 'react';

interface Props {
  value: string;
  onChange: (date: string) => void;
}

const DateInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor='date' className='block text-sm font-medium leading-6 text-gray-900'>
        Date
      </label>
      <div className='mt-2'>
        <input
          type='text'
          name='date'
          id='date'
          className='block w-full rounded-md border-2 lg:border-1 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='01/01/2023'
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DateInput;
