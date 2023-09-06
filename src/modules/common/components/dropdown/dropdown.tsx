import React from 'react';

interface Props {
  options: { name: string; value: string }[];
  onChangeLanguage: (e: string) => void;
}

const Dropdown: React.FC<Props> = ({ options, onChangeLanguage }) => {
  return (
    <div>
      <select
        id='language'
        name='language'
        className='mt-2 text-xs block bg-transparent w-full pl-3 pr-10 text-gray-900'
        onChange={(e) => onChangeLanguage(e.target.value)}
      >
        {options.map(({ name, value }) => (
          <option key={name} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
