import React from 'react';
import { FlyoutMenu } from '@modules/common/components/flyout-menu/flyout-menu';
import { Dropdown } from '@modules/common/components/dropdown/dropdown';
import OutlinedButton from '@modules/common/components/buttons/outlined-button/outlined-button';
import ContainedButton from '@modules/common/components/buttons/contained-button/contained-button';
import { useScrollYDistance } from '@modules/common/hooks/use-scroll-y-distance/use-scroll-y-distance';
import classNames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import { RoutePaths } from '@router/enums/route-paths';

const menus = ['Products', 'Solutions', 'Developers', 'Services & Support', 'Pricing'];
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

const Header: React.FC = () => {
  const navigate = useNavigate();
  const state = useScrollYDistance();

  return (
    <nav
      className={classNames(
        'w-full h-30 flex items-end justify-center flex-col',
        state > 0 && 'sticky top-0 shadow-md z-20',
      )}
    >
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
      <div className='h-28 w-full px-4 flex items-center justify-between bg-white'>
        <Link to={RoutePaths.Home}>
          <h2 className='text-2xl'>LOGO</h2>
        </Link>
        <div className='flex items-center justify-between gap-8'>
          {menus.map((menu) => (
            <FlyoutMenu key={menu} title={menu} />
          ))}
        </div>
        <div className='flex items-center justify-between gap-2'>
          <OutlinedButton
            onClick={() => navigate('/contact')}
            className='bg-white text-[#0363f4] ring-[#0363f4] hover:bg-[#0363f4] hover:text-white'
          >
            Contact Sales
          </OutlinedButton>
          <ContainedButton className='bg-[#0363f4] text-white hover:bg-[#032bf4]'>Start for free</ContainedButton>
        </div>
      </div>
    </nav>
  );
};

export default Header;
