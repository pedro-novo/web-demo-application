import React from 'react';
import { useTranslation } from 'react-i18next';
import Dropdown from '@modules/common/components/dropdown/dropdown';
import classNames from 'classnames';

import CloseButton from '../close-button/close-button';
import HeaderButtons from '../header-buttons/header-buttons';
import HeaderOptions from '../header-options/header-options';

const languages = [
  { name: 'English', value: 'en' },
  { name: 'Spanish', value: 'es' },
  { name: 'Portuguese', value: 'pt' },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<Props> = ({ isOpen, onClose }) => {
  const { i18n } = useTranslation();

  const onLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div
      className={classNames(
        'fixed h-[120vh] w-full top-0 right-0 bg-white ease-in-out duration-300 z-50 lg:hidden',
        isOpen ? 'translate-x-0' : 'translate-x-full',
      )}
    >
      <div className='w-full px-8 py-8 flex flex-row items-center justify-between'>
        <CloseButton onClose={onClose} />
        <Dropdown options={languages} onChangeLanguage={onLanguageChange} />
      </div>
      <div className='px-10 py-5 h-screen flex justify-evenly items-center flex-col' onClick={onClose}>
        <div className='mb-16 flex flex-col items-center justify-evenly gap-8'>
          <HeaderOptions />
        </div>
        <HeaderButtons />
      </div>
    </div>
  );
};

export default MobileNav;
