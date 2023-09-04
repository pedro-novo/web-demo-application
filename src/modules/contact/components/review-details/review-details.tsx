import React from 'react';
import Container from '@modules/common/components/container/container';
import { useContactContext } from '@modules/contact/context/contact-context';

const ReviewDetails: React.FC = () => {
  const { state } = useContactContext();
  const { name, email, description, date, location } = state;

  return (
    <Container>
      <div className='min-h-[480px]'>
        <div className='pt-12 px-4 sm:px-0'>
          <h3 className='text-base font-semibold leading-7 text-gray-900'>Applicant Information</h3>
          <p className='mt-1 max-w-2xl text-sm leading-6 text-gray-500'>Personal details and application.</p>
        </div>
        <div className='border-t border-gray-100 md:mt-6'>
          <dl className='divide-y divide-gray-100'>
            <div className='px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>Full name</dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>{name}</dd>
            </div>
            <div className='px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>Email address</dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>{email}</dd>
            </div>
            <div className='px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>Location</dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>{location}</dd>
            </div>
            <div className='px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>Date</dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>{date}</dd>
            </div>
            <div className='px-4 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
              <dt className='text-sm font-medium leading-6 text-gray-900'>Description</dt>
              <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
                {description ? description : 'No Description'}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Container>
  );
};

export default ReviewDetails;
