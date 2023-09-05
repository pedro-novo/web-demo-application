import React from 'react';
import { useTranslation } from 'react-i18next';

const Message: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='w-full mt-8 bg-white px-6 sm:pt-32 lg:px-8'>
      <div className='mx-auto max-w-2xl text-center'>
        <h2 className='text-4xl font-bold tracking-tight text-gray-900'>{t('body.lovedMessage')}</h2>
      </div>
    </div>
  );
};

export default Message;
