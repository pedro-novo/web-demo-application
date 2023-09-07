import React from 'react';

import Body from '../body/body';
import { Hero } from '../hero/hero';
import Shortcuts from '../shortcuts/shortcuts';
import Info from '../snippet/info';
import Studio from '../studio/studio';

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Shortcuts />
      <Body />
      <Info />
      <Studio />
    </div>
  );
};
