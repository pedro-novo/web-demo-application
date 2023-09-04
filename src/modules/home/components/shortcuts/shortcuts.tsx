import React from 'react';
import ArrowButton from '@modules/common/components/buttons/arrow-button/arrow-button';

const Shortcuts: React.FC = () => {
  return (
    <section className='w-full lg:px-24 2xl:px-36'>
      <div className='px-12 -mt-5 flex items-center justify-around gap-2'>
        <ArrowButton>Developers</ArrowButton>
        <ArrowButton>Marketers</ArrowButton>
        <ArrowButton>Product Owners</ArrowButton>
        <ArrowButton>Sales & Support</ArrowButton>
      </div>
    </section>
  );
};

export default Shortcuts;
