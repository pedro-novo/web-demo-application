import { FlyoutMenu } from '@modules/common/components/flyout-menu/flyout-menu';
import React from 'react';

const menus = ['Products', 'Solutions', 'Developers', 'Services & Support', 'Pricing'];

const HeaderOptions: React.FC = () => {
  return (
    <div className='flex items-center justify-between gap-8'>
      {menus.map((menu) => (
        <FlyoutMenu key={menu} title={menu} />
      ))}
    </div>
  );
};

export default HeaderOptions;
