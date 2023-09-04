import React from 'react';
import { useScrollYDistance } from '@modules/common/hooks/use-scroll-y-distance/use-scroll-y-distance';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { RoutePaths } from '@router/enums/route-paths';
import { useMediaQuery } from '@mui/material';
import { muiMobileQuery } from '@modules/common/constants/mediaQuery';
import HeaderOptions from './components/header-options/header-options';
import HeaderButtons from './components/header-buttons/header-buttons';
import SubHeader from './components/sub-header/sub-header';

const Header: React.FC = () => {
  const state = useScrollYDistance();
  const isMobile = useMediaQuery(muiMobileQuery);

  return (
    <nav
      className={classNames(
        'w-full h-30 flex items-end justify-center flex-col',
        state > 0 && 'sticky top-0 shadow-md z-20',
      )}
    >
      {!isMobile ? <SubHeader state={state} /> : null}
      <div className='h-28 w-full px-4 flex items-center justify-between bg-white'>
        <Link to={RoutePaths.Home}>
          <h2 className='text-2xl'>LOGO</h2>
        </Link>
        {!isMobile ? <HeaderOptions /> : null}
        <HeaderButtons />
      </div>
    </nav>
  );
};

export default Header;
