import React from 'react';
import classNames from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className: string;
}

const OutlinedButton: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <button
      type='button'
      {...props}
      className={classNames('rounded-md px-4 py-2.5 text-sm shadow-sm ring-1 ring-inset', className)}
    >
      {children}
    </button>
  );
};

export default OutlinedButton;
