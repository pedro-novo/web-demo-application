import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { muiMobileQuery } from '@modules/common/constants/mediaQuery';
import { useContactContext } from '@modules/contact/context/contact-context';
import { Step } from '@modules/contact/core/interfaces/step';
import { updateStepStatus } from '@modules/contact/utils/update-step-status';
import { useMediaQuery } from '@mui/material';
import { RoutePaths } from '@router/enums/route-paths';

import StepperFooter from './stepper-footer';
import StepperHeader from './stepper-header';
import StepperHeaderMobile from './stepper-header-mobile';

interface Props {
  steps: Step[];
  stepsComponents: Record<number, React.ReactNode>;
  onCancel: () => void;
}

const WizardStepper: React.FC<Props> = ({ steps, stepsComponents, onCancel }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(muiMobileQuery);

  const [activeStep, setActiveStep] = useState(0);
  const [newSteps, setNewSteps] = useState<Step[]>(steps);

  const { state } = useContactContext();
  const { name, email, location, date } = state;

  const canGoToNextStep = !!name && !!email && !!location;
  const canGoToBackStep = activeStep !== 0;
  const canFinish = canGoToNextStep && !!date;

  const onNext = () => {
    if (!canGoToNextStep) {
      return;
    }

    if (activeStep === 1 && !canFinish) {
      return;
    }

    setNewSteps((prev) => updateStepStatus(prev, activeStep + 1, 'add'));
    setActiveStep((prev) => prev + 1);
  };

  const onPrevious = () => {
    if (!canGoToBackStep) {
      return;
    }
    setNewSteps((prev) => updateStepStatus(prev, activeStep, 'sub'));
    setActiveStep((prev) => prev - 1);
  };

  const onFinish = () => {
    if (!canFinish) {
      return;
    }

    toast.success('User created successfully');
    navigate(RoutePaths.Home);
  };

  return (
    <div>
      {isMobile ? <StepperHeaderMobile steps={newSteps} /> : <StepperHeader steps={newSteps} />}
      {stepsComponents[activeStep]}
      <StepperFooter
        isNextAvailable={canGoToNextStep}
        isFinishAvailable={canFinish}
        currentStepIndex={activeStep}
        onNext={onNext}
        onPrevious={onPrevious}
        onCancel={onCancel}
        onFinish={onFinish}
      />
    </div>
  );
};

export default WizardStepper;
