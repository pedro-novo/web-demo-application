import React from 'react';
import ContainedButton from '@modules/common/components/buttons/contained-button/contained-button';
import OutlinedButton from '@modules/common/components/buttons/outlined-button/outlined-button';
import Container from '@modules/common/components/container/container';
import classNames from 'classnames';

interface Props {
  isNextAvailable: boolean;
  isBackAvailable: boolean;
  isFinishAvailable: boolean;
  currentStepIndex: number;
  onNext: () => void;
  onPrevious: () => void;
  onCancel: () => void;
  onFinish: () => void;
}

const StepperFooter: React.FC<Props> = ({
  isNextAvailable,
  isBackAvailable,
  isFinishAvailable,
  currentStepIndex,
  onNext,
  onPrevious,
  onCancel,
  onFinish,
}) => {
  const isNextButtonDisabled = currentStepIndex === 0 ? !isNextAvailable : !isFinishAvailable;

  const onNextStep = () => {
    if (currentStepIndex === 2) {
      onFinish();
      return;
    }

    onNext();
  };

  return (
    <Container>
      <div className='h-12 mt-8 w-full flex items-center justify-between'>
        <OutlinedButton
          disabled={isBackAvailable}
          onClick={onCancel}
          className='bg-white text-[#0363f4] ring-[#0363f4] hover:bg-[#0363f4] hover:text-white'
        >
          Cancel
        </OutlinedButton>

        <div className='flex items-center justify-center gap-2'>
          <OutlinedButton
            disabled={isBackAvailable}
            onClick={onPrevious}
            className={classNames(
              currentStepIndex === 0
                ? 'bg-white text-[#a0a0a0] ring-[#a0a0a0]'
                : 'bg-white text-[#0363f4] ring-[#0363f4] hover:bg-[#0363f4] hover:text-white',
            )}
          >
            Previous
          </OutlinedButton>
          <ContainedButton
            disabled={isNextButtonDisabled}
            onClick={onNextStep}
            className={classNames(
              isNextButtonDisabled ? 'bg-[#a0a0a0] text-white' : 'bg-[#0363f4] text-white hover:bg-[#032bf4]',
            )}
          >
            {currentStepIndex === 2 ? 'Finish' : 'Next'}
          </ContainedButton>
        </div>
      </div>
    </Container>
  );
};

export default StepperFooter;
