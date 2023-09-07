import React, { useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import ContainedButton from '@modules/common/components/buttons/contained-button/contained-button';
import OutlinedButton from '@modules/common/components/buttons/outlined-button/outlined-button';
import classNames from 'classnames';

const optionArray = ['text', 'whatsapp', 'phone', 'email'];

const TextSection: React.FC = () => {
  const { t } = useTranslation();
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (currentText < optionArray.length - 1) {
        setCurrentText((prev) => prev + 1);
      } else {
        setCurrentText(0);
      }
    }, 5000);
  }, [currentText]);

  return (
    <div className='w-full py-12 md:w-[50%]'>
      <div className='text-left'>
        <h2 className='text-4xl font-semibold tracking-tight text-white'>
          <Trans i18nKey='snippet.title' values={{ option: t(`snippet.${optionArray[currentText]}`) }}>
            Send your first
            <span className={classNames('block opacity-1 text-[#dfb055] underline decoration-dotted')}>
              <code>{`${optionArray[currentText]}`}</code>
            </span>
            in a matter of minutes
          </Trans>
        </h2>
        <p className='mt-6 text-lg text-white'>{t('snippet.paragraph')}</p>
      </div>
      <div className='mt-8 flex items-center justify-start gap-2'>
        <ContainedButton className='bg-white text-[#121c2d] hover:bg-[#032bf4]'>
          {t('snippet.viewDocs')}
        </ContainedButton>
        <OutlinedButton className='bg-[#121c2d] text-white ring-white hover:bg-white hover:text-[#032bf4]'>
          {t('snippet.signup')}
        </OutlinedButton>
      </div>
    </div>
  );
};

export default TextSection;
