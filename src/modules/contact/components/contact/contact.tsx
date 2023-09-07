import React from 'react';
import { ContactContextProvider } from '@modules/contact/context/contact-context';

import ContactWizard from '../contact-wizard/contact-wizard';

export const Contact: React.FC = () => {
  return (
    <ContactContextProvider>
      <ContactWizard />
    </ContactContextProvider>
  );
};
