import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import ContainedButton from '@modules/common/components/buttons/contained-button/contained-button';
import OutlinedButton from '@modules/common/components/buttons/outlined-button/outlined-button';

const HeaderButtons: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-center justify-between gap-2 lg:flex-row'>
      <OutlinedButton
        onClick={() => navigate('/contact')}
        className='w-full whitespace-nowrap bg-white text-[#0363f4] ring-[#0363f4] hover:bg-[#0363f4] hover:text-white'
      >
        {t('header.buttons.contact')}
      </OutlinedButton>
      <ContainedButton className='w-full whitespace-nowrap bg-[#0363f4] text-white hover:bg-[#032bf4]'>
        {t('header.buttons.start')}
      </ContainedButton>
    </div>
  );
};

export default HeaderButtons;
