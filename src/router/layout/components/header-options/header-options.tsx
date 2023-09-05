import { FlyoutMenu } from '@modules/common/components/flyout-menu/flyout-menu';
import React from 'react';
import { useTranslation } from 'react-i18next';

const menus = ['products', 'solutions', 'developers', 'servicesAndSupport', 'pricing'];

const HeaderOptions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='flex items-center justify-between gap-8'>
      {menus.map((menu) => (
        <FlyoutMenu key={menu} title={t(`header.options.${menu}`)} />
      ))}
    </div>
  );
};

export default HeaderOptions;
