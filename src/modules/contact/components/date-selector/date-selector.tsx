import React, { useCallback } from 'react';
import Container from '@modules/common/components/container/container';
import { useContactContext } from '@modules/contact/context/contact-context';
import DateInput from './date-input';

const DateSelector: React.FC = () => {
  const { state, setDate } = useContactContext();

  const onChangeDate = useCallback(
    (date: string) => {
      setDate(date);
    },
    [setDate],
  );

  return (
    <Container>
      <div className='h-[500px] py-12'>
        <DateInput value={state.date} onChange={onChangeDate} />
      </div>
    </Container>
  );
};

export default DateSelector;
