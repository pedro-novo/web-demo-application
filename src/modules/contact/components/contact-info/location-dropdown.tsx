import React from 'react';

interface Props {
  value: string;
  onChange: (location: string) => void;
}

const LocationDropdown: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor='location' className='block text-sm font-medium leading-6 text-gray-900'>
        Location
      </label>
      <select
        id='location'
        name='location'
        className='mt-2 block w-full rounded-md border-1 border-gray-300 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6'
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value='United States'>United States</option>
        <option value='United Kingdom'>United Kingdom</option>
        <option value='Spain'>Spain</option>
      </select>
    </div>
  );
};

export default LocationDropdown;
