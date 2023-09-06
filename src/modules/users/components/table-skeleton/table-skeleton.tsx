import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const TableSkeleton: React.FC = () => {
  return (
    <div className='mt-10 mb-20 h-full'>
      {Array.from(new Array(10)).map((_, index) => (
        <div key={`row-${index}`} className='w-full flex flex-row items-center justify-center gap-2'>
          {Array.from(new Array(8)).map((_, idx) => (
            <Skeleton key={idx} height={40} width='100%' />
          ))}
        </div>
      ))}
    </div>
  );
};

export default TableSkeleton;
