import React from 'react';
import TextSection from './text-section';
import { useTranslation } from 'react-i18next';

const titles = ['launch', 'build', 'start'];

const Studio: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className='w-full px-12 py-4 bg-[#fdf7f4] text-[#121c2d] lg:px-24 2xl:px-36 2xl:py-24'>
      <div className='w-full flex items-center justify-between gap-4'>
        <TextSection />
        <div></div>
      </div>
      <div className='w-full pb-12 flex flex-col items-start justify-between gap-4 md:flex-row'>
        {titles.map((title) => (
          <div key={title} className='max-w-[360px]'>
            <h2 className='text-lg font-semibold text-[#121c2d]'>{t(`studio.textBlocks.${title}`)}</h2>
            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nobis!</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Studio;
