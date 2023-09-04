import React from 'react';
import ContainedButton from '@modules/common/components/buttons/contained-button/contained-button';
import OutlinedButton from '@modules/common/components/buttons/outlined-button/outlined-button';

const TextSection: React.FC = () => {
  return (
    <div className='w-[50%] py-12'>
      <div className='text-left'>
        <h2 className='text-4xl font-semibold tracking-tight text-[#121c2d]'>No coding experience? No problem.</h2>
        <p className='mt-6 text-lg text-[#121c2d]'>
          You don't have to be a developer to use Twilio. You can visually create, edit, and manage communication
          workflows too.
        </p>
      </div>
      <div className='mt-8 flex items-center justify-start gap-2'>
        <ContainedButton className='bg-[#121c2d] text-white hover:bg-[#032bf4]'>View the docs</ContainedButton>
        <OutlinedButton className='bg-transparent text-[#121c2d] ring-[#121c2d] hover:bg-[#0363f4] hover:text-white'>
          Sign up
        </OutlinedButton>
      </div>
    </div>
  );
};

export default TextSection;
