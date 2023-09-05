import { Dropdown } from '@modules/common/components/dropdown/dropdown';
import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { name: 'languages.english', href: 'en' },
  { name: 'languages.spanish', href: 'en' },
  { name: 'languages.portuguese', href: 'pt' },
];
const support = [
  { name: 'support.helpCenter', href: '#' },
  { name: 'support.talkToSupport', href: '#' },
  { name: 'support.training', href: '#' },
];

interface Props {
  state: number;
}

const SubHeader: React.FC<Props> = ({ state }) => {
  const { t, i18n } = useTranslation();

  const onLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header
      className={classNames(
        'w-full flex items-center justify-between bg-[#fcfcfc] transition-all duration-200',
        state > 0 ? 'h-0 invisible' : 'h-8 visible',
      )}
    >
      <div></div>
      <div className='px-4 flex justify-center items-start gap-2'>
        <Dropdown title={t('header.dropdown.language')} items={languages} onChangeLanguage={onLanguageChange} />
        <Dropdown title={t('header.dropdown.support')} items={support} onChangeLanguage={() => {}} />
      </div>
    </header>
  );
};

export default SubHeader;
