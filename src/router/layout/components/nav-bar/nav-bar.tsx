import React, { useState } from 'react';
import { RoutePaths } from '@router/enums/route-paths';
import { Link } from 'react-router-dom';
import HeaderButtons from '../header-buttons/header-buttons';
import HeaderOptions from '../header-options/header-options';
import OpenButton from '../open-button/open-button';
import MobileNav from '../mobile-nav/mobile-nav';
import { useScrollYDistance } from '@modules/common/hooks/use-scroll-y-distance/use-scroll-y-distance';
import classNames from 'classnames';
import SubHeader from '../sub-header/sub-header';

const NavBar: React.FC = () => {
  const state = useScrollYDistance();

  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SubHeader state={state} />
      <div
        className={classNames(
          'w-full px-4 h-24 flex items-center justify-between bg-white',
          state > 0 && 'sticky top-0 shadow-md z-20',
        )}
      >
        <Link to={RoutePaths.Home}>
          <h2 className='text-2xl'>LOGO</h2>
        </Link>
        <div className='hidden items-center justify-evenly gap-8 lg:flex'>
          <HeaderOptions />
        </div>
        <div className='hidden lg:flex'>
          <HeaderButtons />
        </div>
        <OpenButton onOpen={onOpen} />
      </div>
      <MobileNav isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default NavBar;
