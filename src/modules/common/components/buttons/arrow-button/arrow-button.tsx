import React from 'react';
import { ArrowRightCircleIcon } from '@heroicons/react/20/solid';
import { RoutePaths } from '@router/enums/route-paths';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const ArrowButton: React.FC<Props> = ({ children }) => {
  return (
    <Link
      to={RoutePaths.Users}
      className='w-full h-12 flex items-center justify-between rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#f22f46] cursor-pointer shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:text-[#0363f4] z-10'
    >
      <p className='text-black font-medium text-[16px]'>{children}</p>
      <ArrowRightCircleIcon className='-mr-0.5 h-8 w-8' aria-hidden='true' />
    </Link>
  );
};

export default ArrowButton;
