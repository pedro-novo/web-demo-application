import React from 'react';
import { useGetUsers } from '@modules/common/queries/users/use-get-users';

import TableSkeleton from '../table-skeleton/table-skeleton';
import UsersList from '../users-list/users-list';

export const Users: React.FC = () => {
  const { users, isUsersLoading } = useGetUsers();

  return <div className='py-12'>{!isUsersLoading ? <UsersList people={users} /> : <TableSkeleton />}</div>;
};
