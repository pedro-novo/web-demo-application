import { Dropdown } from '@modules/common/components/dropdown/dropdown';
import classNames from 'classnames';
import React from 'react';

const languages = [
  { name: 'English', href: '#' },
  { name: 'Spanish', href: '#' },
  { name: 'Portuguese', href: '#' },
];
const support = [
  { name: 'Help Center', href: '#' },
  { name: 'Talk to Support', href: '#' },
  { name: 'Training', href: '#' },
];

interface Props {
  state: number;
}

const SubHeader: React.FC<Props> = ({ state }) => {
  return (
    <header
      className={classNames(
        'w-full flex items-center justify-between bg-[#fcfcfc] transition-all duration-200',
        state > 0 ? 'h-0 invisible' : 'h-8 visible',
      )}
    >
      <div></div>
      <div className='px-4 flex justify-center items-start gap-2'>
        <Dropdown title='Language' items={languages} />
        <Dropdown title='Support' items={support} />
      </div>
    </header>
  );
};

export default SubHeader;
