import { useContactContext } from '@modules/contact/context/contact-context';
import React, { useCallback } from 'react';
import NameInput from './name-input';
import EmailInput from './email-input';
import LocationDropdown from './location-dropdown';
import DescriptionTextArea from './description-text-area';
import Container from '@modules/common/components/container/container';

const ContactInfo: React.FC = () => {
  const { state, setName, setEmail, setLocation, setDescription } = useContactContext();
  const { name, email, location, description } = state;

  const onChangeName = useCallback(
    (name: string) => {
      setName(name);
    },
    [setName],
  );

  const onChangeEmail = useCallback(
    (email: string) => {
      setEmail(email);
    },
    [setEmail],
  );

  const onChangeLocation = useCallback(
    (location: string) => {
      setLocation(location);
    },
    [setLocation],
  );

  const onChangeDescription = useCallback(
    (description: string) => {
      setDescription(description);
    },
    [setDescription],
  );

  return (
    <Container>
      <div className='h-[500px]'>
        <div className='pt-12 flex flex-col items-start justify-center gap-4'>
          <NameInput value={name} onChange={onChangeName} />
          <EmailInput value={email} onChange={onChangeEmail} />
          <LocationDropdown value={location} onChange={onChangeLocation} />
        </div>
        <div className='pb-12'>
          <DescriptionTextArea value={description} onChange={onChangeDescription} />
        </div>
      </div>
    </Container>
  );
};

export default ContactInfo;
