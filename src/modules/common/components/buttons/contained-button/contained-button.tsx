import classNames from 'classnames';
import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className: string;
}

const ContainedButton: React.FC<Props> = ({ children, className, ...props }) => {
  return (
    <button type='button' {...props} className={classNames('rounded-md px-4 py-2.5 text-sm shadow-sm', className)}>
      {children}
    </button>
  );
};

export default ContainedButton;
