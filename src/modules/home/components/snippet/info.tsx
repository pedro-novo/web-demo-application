import React from 'react';
import TextSection from './text-section';
import CodeSnippetSection from './code-snippet-section';

const titles = ['Title #1', 'Title #2', 'Title #3'];

const Info: React.FC = () => {
  return (
    <section className='w-full px-12 py-4 bg-[#121c2d] text-white lg:px-24 2xl:px-36 2xl:py-24'>
      <div className='w-full flex items-center justify-between gap-4'>
        <TextSection />
        <CodeSnippetSection />
      </div>
      <div className='w-full pb-12 flex items-center justify-between'>
        {titles.map((title) => (
          <div key={title} className='max-w-[360px]'>
            <h2>
              <code>{title}</code>
            </h2>
            <p className='mt-4'>
              <code>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, nobis!</code>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;