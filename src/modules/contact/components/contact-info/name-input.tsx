import React from 'react';

interface Props {
  value: string;
  onChange: (name: string) => void;
}

const NameInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor='name' className='block text-sm font-medium leading-6 text-gray-900'>
        Name
      </label>
      <div className='mt-2'>
        <input
          type='text'
          name='name'
          id='name'
          className='block w-full rounded-md border-1 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='John Doe'
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default NameInput;
