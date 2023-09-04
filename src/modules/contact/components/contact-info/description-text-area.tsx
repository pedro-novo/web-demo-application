import React from 'react';

interface Props {
  value: string;
  onChange: (description: string) => void;
}

const DescriptionTextArea: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor='comment' className='block text-sm font-medium leading-6 text-gray-900'>
        Add a description
      </label>
      <div className='mt-2'>
        <textarea
          rows={4}
          name='comment'
          id='comment'
          className='block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DescriptionTextArea;
