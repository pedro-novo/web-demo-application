import { useGetUsers } from '@modules/common/queries/users/use-get-users';
import React from 'react';
import UsersList from '../users-list/users-list';
import TableSkeleton from '../table-skeleton/table-skeleton';

export const Users: React.FC = () => {
  const { users, isUsersLoading } = useGetUsers();

  return <div className='py-12'>{!isUsersLoading ? <UsersList people={users} /> : <TableSkeleton />}</div>;
};
