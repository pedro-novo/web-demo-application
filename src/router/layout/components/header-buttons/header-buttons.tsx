import ContainedButton from '@modules/common/components/buttons/contained-button/contained-button';
import OutlinedButton from '@modules/common/components/buttons/outlined-button/outlined-button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderButtons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between gap-2'>
      <OutlinedButton
        onClick={() => navigate('/contact')}
        className='bg-white text-[#0363f4] ring-[#0363f4] hover:bg-[#0363f4] hover:text-white'
      >
        Contact Sales
      </OutlinedButton>
      <ContainedButton className='bg-[#0363f4] text-white hover:bg-[#032bf4]'>Start for free</ContainedButton>
    </div>
  );
};

export default HeaderButtons;
