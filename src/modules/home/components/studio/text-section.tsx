import React from 'react';
import { useTranslation } from 'react-i18next';
import ContainedButton from '@modules/common/components/buttons/contained-button/contained-button';
import OutlinedButton from '@modules/common/components/buttons/outlined-button/outlined-button';

const TextSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full py-12 md:w-[50%]'>
      <div className='text-left'>
        <h2 className='text-4xl font-semibold tracking-tight text-[#121c2d]'>{t('studio.header.title')}</h2>
        <p className='mt-6 text-lg text-[#121c2d]'>{t('studio.header.paragraph')}</p>
      </div>
      <div className='mt-8 flex items-center justify-start gap-2'>
        <ContainedButton className='bg-[#121c2d] text-white hover:bg-[#032bf4]'>
          {t('studio.header.viewDocs')}
        </ContainedButton>
        <OutlinedButton className='bg-transparent text-[#121c2d] ring-[#121c2d] hover:bg-[#0363f4] hover:text-white'>
          {t('studio.header.signup')}
        </OutlinedButton>
      </div>
    </div>
  );
};

export default TextSection;
