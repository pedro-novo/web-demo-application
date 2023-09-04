import { useGetUsers } from '@modules/common/queries/users/use-get-users';
import React from 'react';
import UsersList from '../users-list/users-list';

export const Users: React.FC = () => {
  const { users } = useGetUsers();

  return (
    <div className='py-12'>
      <UsersList people={users} />
    </div>
  );
};
