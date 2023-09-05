import ContainedButton from '@modules/common/components/buttons/contained-button/contained-button';
import OutlinedButton from '@modules/common/components/buttons/outlined-button/outlined-button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const HeaderButtons: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className='flex items-center justify-between gap-2'>
      <OutlinedButton
        onClick={() => navigate('/contact')}
        className='bg-white text-[#0363f4] ring-[#0363f4] hover:bg-[#0363f4] hover:text-white'
      >
        {t('header.buttons.contact')}
      </OutlinedButton>
      <ContainedButton className='bg-[#0363f4] text-white hover:bg-[#032bf4]'>
        {t('header.buttons.start')}
      </ContainedButton>
    </div>
  );
};

export default HeaderButtons;
