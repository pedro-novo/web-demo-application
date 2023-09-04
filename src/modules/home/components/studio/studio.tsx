import React from 'react';
import TextSection from './text-section';

const titles = [
  'Launch a proof of concept quickly',
  'Build IVRs for every user, any channel',
  'Start for free. Pay as you go.',
];

const Studio: React.FC = () => {
  return (
    <section className='w-full px-12 py-4 bg-[#fdf7f4] text-[#121c2d] lg:px-24 2xl:px-36 2xl:py-24'>
      <div className='w-full flex items-center justify-between gap-4'>
        <TextSection />
        <div></div>
      </div>
      <div className='w-full pb-12 flex items-start justify-between gap-4'>
        {titles.map((title) => (
          <div key={title} className='max-w-[360px]'>
            <h2 className='text-lg font-semibold text-[#121c2d]'>{title}</h2>
            <p className='mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nobis!</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Studio;
