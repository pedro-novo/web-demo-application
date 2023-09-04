/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useReducer } from 'react';
import { ContactState, initialContactState } from '../reducer/contact-state';
import { ContactDispatch, contactReducer, helperFunctions } from '../reducer/contact-reducer';

interface Props {
  children: React.ReactNode;
}

type ContactContextType = {
  state: ContactState;
  dispatch: ContactDispatch;
};

const ContactContext = createContext<ContactContextType>({
  state: initialContactState,
  dispatch: () => undefined,
});

const ContactContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(contactReducer, initialContactState);

  return <ContactContext.Provider value={{ state, dispatch }}>{children}</ContactContext.Provider>;
};

const useContactContext = () => {
  const context = useContext(ContactContext);

  if (!context) {
    throw new Error('useContactContext must be used within a ContactContextProvider');
  }

  const { dispatch } = context;

  return { ...context, ...helperFunctions(dispatch) };
};

export { ContactContextProvider, useContactContext };
export type { ContactContextType };
