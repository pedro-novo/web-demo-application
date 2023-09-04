import React from 'react';
import Intro from './intro';

import SmartphoneImage from './smartphone-image';
import AccordionSection from './accordion-section';
import Message from './message';

const Body: React.FC = () => {
  return (
    <section className='w-full px-8 py-12 bg-white lg:px-24 2xl:px-36'>
      <Intro />
      <div className='w-full px-8 flex item-center justify-start bg-white'>
        <AccordionSection />
        <SmartphoneImage />
      </div>
      <Message />
    </section>
  );
};

export default Body;
