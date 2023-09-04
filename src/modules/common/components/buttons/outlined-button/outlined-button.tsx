import classNames from 'classnames';
import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className: string;
}

const OutlinedButton: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <button
      type='button'
      className={classNames('rounded-md px-4 py-2.5 text-sm shadow-sm ring-1 ring-inset', className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default OutlinedButton;
