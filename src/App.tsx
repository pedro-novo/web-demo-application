import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from '@router/layout/layout';
import { Home } from '@modules/home';
import { Contact } from '@modules/contact';
import { RoutePaths } from '@router/enums/route-paths';
import { Users } from '@modules/users';
import UserDetails from '@modules/users/components/user-detais/user-details';

const client = new QueryClient();

const App: React.FC = () => {
  return (
    <div className='bg-[#fcfcfc]'>
      <QueryClientProvider client={client}>
        <Router>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route path={RoutePaths.Home} element={<Home />} />
              <Route path={RoutePaths.Contact} element={<Contact />} />
              <Route path={RoutePaths.Users} element={<Users />} />
              <Route path={RoutePaths.UserDetails} element={<UserDetails />} />
            </Route>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
};

export default App;
