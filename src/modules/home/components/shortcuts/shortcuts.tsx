import React from 'react';
import { useTranslation } from 'react-i18next';
import ArrowButton from '@modules/common/components/buttons/arrow-button/arrow-button';

const Shortcuts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className='w-full lg:px-24 2xl:px-36'>
      <div className='px-12 mt-8 flex flex-col items-center justify-around gap-2 md:-mt-5 md:flex-row'>
        <ArrowButton>{t('shortcuts.developers')}</ArrowButton>
        <ArrowButton>{t('shortcuts.marketers')}</ArrowButton>
        <ArrowButton>{t('shortcuts.productOwners')}</ArrowButton>
        <ArrowButton>{t('shortcuts.salesAndSupport')}</ArrowButton>
      </div>
    </section>
  );
};

export default Shortcuts;
