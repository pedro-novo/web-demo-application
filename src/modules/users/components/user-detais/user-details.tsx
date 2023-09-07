import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '@modules/common/components/container/container';
import { useGetUserById } from '@modules/common/queries/users/use-get-user-by-id';
import { Skeleton } from '@mui/material';

const UserDetails: React.FC = () => {
  const { id = '' } = useParams();

  const { user, isUserLoading } = useGetUserById(parseInt(id));

  return (
    <Container>
      <div className='py-12 min-h-[480px]'>
        <div className='px-4 sm:px-0'>
          <h3 className='text-base font-semibold leading-7 text-gray-900'>User Details</h3>
          <p className='mt-1 max-w-2xl text-sm leading-6 text-gray-500'>User details and information.</p>
        </div>
        <div className='mt-6 border-t border-gray-100'>
          <dl className='divide-y divide-gray-100'>
            <div className='px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>Full name</dt>
              {!isUserLoading ? (
                <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>{user?.name}</dd>
              ) : (
                <Skeleton animation='wave' />
              )}
            </div>
            <div className='px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>Username</dt>
              {!isUserLoading ? (
                <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>{user?.username}</dd>
              ) : (
                <Skeleton animation='wave' />
              )}
            </div>
            <div className='px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>Email address</dt>
              {!isUserLoading ? (
                <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>{user?.email}</dd>
              ) : (
                <Skeleton animation='wave' />
              )}
            </div>
            <div className='px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>Phone number</dt>
              {!isUserLoading ? (
                <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>{user?.phone}</dd>
              ) : (
                <Skeleton animation='wave' />
              )}
            </div>
            <div className='px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>Website</dt>
              {!isUserLoading ? (
                <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>{user?.website}</dd>
              ) : (
                <Skeleton animation='wave' />
              )}
            </div>
          </dl>
        </div>
      </div>
    </Container>
  );
};

export default UserDetails;
