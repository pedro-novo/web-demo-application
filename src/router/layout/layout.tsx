import React from 'react';
import { Outlet } from 'react-router-dom';

import NavBar from './components/nav-bar/nav-bar';
import Footer from './footer';

const Layout: React.FC = () => {
  return (
    <div className='xl:mx-10'>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
