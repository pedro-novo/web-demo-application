import { RoutePaths } from '@router/enums/route-paths';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactInfo from '../contact-info/contact-info';
import AddressSelector from '../date-selector/date-selector';
import ReviewDetails from '../review-details/review-details';
import WizardStepper from '../wizard-stepper/wizard-stepper';

const steps = [
  { id: 1, name: 'User Information', href: '#', status: 'current' },
  { id: 2, name: 'Select a Date', href: '#', status: 'upcoming' },
  { id: 3, name: 'Review Details', href: '#', status: 'upcoming' },
];

const stepsComponents: Record<number, React.ReactNode> = {
  0: <ContactInfo />,
  1: <AddressSelector />,
  2: <ReviewDetails />,
};

const ContactWizard: React.FC = () => {
  const navigate = useNavigate();

  const onClose = useCallback(() => {
    navigate(RoutePaths.Home);
  }, [navigate]);

  return <WizardStepper onCancel={onClose} steps={steps} stepsComponents={stepsComponents} />;
};

export default ContactWizard;
