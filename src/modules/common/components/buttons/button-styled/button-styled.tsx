import React from 'react';

interface Props {
  variant: 'contained' | 'outlined' | 'text';
  text: string;
  uppercase: boolean;
}

const ButtonStyled: React.FC<Props> = ({ variant = 'contained', text = 'Hello World', uppercase = false }) => {
  const styles: Record<'contained' | 'outlined' | 'text', string> = {
    contained: 'bg-cyan-700 rounded-lg text-white hover:bg-cyan-500',
    outlined:
      'border-2 bg-none border-cyan-700 rounded-lg text-cyan-700 hover:bg-cyan-700 hover:border-cyan-500 hover:text-white',
    text: 'rounded-lg text-cyan-700 bg-none hover:bg-cyan-500 hover:text-white',
  };

  return (
    <button type='button' className={`min-w-[200px] px-8 py-4 ${styles[variant]} ${uppercase && 'uppercase'}`}>
      {text}
    </button>
  );
};
export default ButtonStyled;
