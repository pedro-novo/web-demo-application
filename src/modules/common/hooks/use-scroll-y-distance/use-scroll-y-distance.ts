import { useEffect, useState } from 'react';

export const useScrollYDistance = () => {
  const [state, setState] = useState<number>(window.scrollY);

  const setter = () => {
    setState(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', setter);

    return () => window.removeEventListener('scroll', setter);
  }, []);

  return state;
};
