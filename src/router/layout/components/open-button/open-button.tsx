import React from 'react';
import { Bars3Icon } from '@heroicons/react/20/solid';

interface Props {
  onOpen: () => void;
}

const OpenButton: React.FC<Props> = ({ onOpen }) => {
  return (
    <button
      type='button'
      className='inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 lg:hidden'
      onClick={onOpen}
    >
      <Bars3Icon className='h-6 w-6' aria-hidden='true' />
    </button>
  );
};

export default OpenButton;
