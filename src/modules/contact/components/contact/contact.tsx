import React from 'react';
import { ContactContextProvider } from '@modules/contact/context/contact-context';

import ContactWizard from '../contact-wizard/contact-wizard';

export const Contact: React.FC = () => {
  return (
    <ContactContextProvider>
      <div className='w-full p-5 bg-white shadow-sm rounded'>
        <ContactWizard />
      </div>
    </ContactContextProvider>
  );
};
