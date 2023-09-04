import { useContactContext } from '@modules/contact/context/contact-context';
import { RoutePaths } from '@router/enums/route-paths';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepperHeader from './stepper-header';
import StepperFooter from './stepper-footer';
import { updateStepStatus } from '@modules/contact/utils/update-step-status';

interface Props {
  steps: {
    id: number;
    name: string;
    href: string;
    status: string;
  }[];
  stepsComponents: Record<number, React.ReactNode>;
  onCancel: () => void;
}

const WizardStepper: React.FC<Props> = ({ steps, stepsComponents, onCancel }) => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [newSteps, setNewSteps] = useState<
    {
      id: number;
      name: string;
      href: string;
      status: string;
    }[]
  >(steps);

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

    setNewSteps((prev) => updateStepStatus(prev, activeStep + 1));
    setActiveStep((prev) => prev + 1);
  };

  const onPrevious = () => {
    if (!canGoToBackStep) {
      return;
    }

    setActiveStep((prev) => prev - 1);
  };

  const onFinish = () => {
    if (!canFinish) {
      return;
    }

    navigate(RoutePaths.Home);
  };

  return (
    <div>
      <StepperHeader steps={newSteps} />
      {stepsComponents[activeStep]}
      <StepperFooter
        isNextAvailable={canGoToNextStep}
        isBackAvailable={canGoToBackStep}
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
