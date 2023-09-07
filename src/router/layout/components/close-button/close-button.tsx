import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

interface Props {
  onClose: () => void;
}

const CloseButton: React.FC<Props> = ({ onClose }) => {
  return (
    <button type='button' className='rounded-md text-gray-700' onClick={onClose}>
      <ChevronRightIcon className='h-8 w-8' aria-hidden='true' />
    </button>
  );
};

export default CloseButton;
