/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useTranslation } from 'react-i18next';

const menus = ['products', 'solutions', 'developers', 'servicesAndSupport', 'pricing'];

const HeaderOptions: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      {menus.map((item) => (
        <a key={item} href='#' className='text-sm font-light leading-6 text-[#2a3076] hover:text-[#0263f4]'>
          {t(`header.options.${item}`)}
        </a>
      ))}
    </>
  );
};

export default HeaderOptions;
