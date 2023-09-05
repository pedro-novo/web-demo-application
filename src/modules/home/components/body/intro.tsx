import React from 'react';
import { useTranslation } from 'react-i18next';

const Intro: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full bg-white px-6 py-24 sm:py-32'>
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-4xl font-bold tracking-tight text-gray-900'>{t('body.header.title')}</h2>
        <p className='mt-6 text-lg leading-8 text-gray-600'>{t('body.header.paragraph')}</p>
      </div>
    </div>
  );
};

export default Intro;
