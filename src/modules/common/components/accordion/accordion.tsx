import React from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';

interface Props {
  children: React.ReactNode;
  isOpen: boolean;
}

export const Accordion = ({ children, isOpen }: Props) => {
  return (
    <div
      className={classNames(
        'w-full flex flex-col items-center justify-start gap-4 border-2 border-[#e1e3ea] hover:border-[#0263f4] rounded overflow-hidden transition-all duration-500',
        isOpen ? 'h-[200px]' : 'h-[76px]',
      )}
    >
      {children}
    </div>
  );
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isOpen: boolean;
}

const Button = ({ children, isOpen, ...props }: ButtonProps) => {
  return (
    <button
      type='button'
      className='w-full flex items-start justify-between p-5 font-medium text-left text-black text-lg '
      {...props}
    >
      <span>{children}</span>
      {isOpen ? <ChevronUpIcon className='w-8 h-8' /> : <ChevronDownIcon className='w-8 h-8' />}
    </button>
  );
};

interface BodyProps {
  children: React.ReactNode;
}

function Body({ children }: BodyProps) {
  return <div className='w-full px-4'>{children}</div>;
}

Accordion.Button = Button;
Accordion.Body = Body;
