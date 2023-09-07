import React from 'react';

import AccordionSection from './accordion-section';
import Intro from './intro';
import Message from './message';
import SmartphoneImage from './smartphone-image';

const Body: React.FC = () => {
  return (
    <section className='w-full py-12 bg-white lg:px-24 2xl:px-36'>
      <Intro />
      <div className='w-full px-8 flex flex-col item-center justify-start gap-8 bg-white md:flex-row'>
        <AccordionSection />
        <SmartphoneImage />
      </div>
      <Message />
    </section>
  );
};

export default Body;
