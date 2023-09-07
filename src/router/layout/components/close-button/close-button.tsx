import { ChevronRightIcon } from '@heroicons/react/20/solid';
import React from 'react';

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
