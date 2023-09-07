import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Accordion } from '@modules/common/components/accordion/accordion';

const AccordionSection: React.FC = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(1);

  return (
    <div className='w-full flex flex-col items-start justify-center gap-4 md:w-[50%]'>
      <Accordion isOpen={open === 1}>
        <Accordion.Button isOpen={open === 1} onClick={() => setOpen(open === 1 ? 0 : 1)}>
          {t('body.accordion.acquire')}
        </Accordion.Button>
        <Accordion.Body>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic dicta debitis non voluptates beatae excepturi?
          Ut sed hic saepe eveniet!
        </Accordion.Body>
      </Accordion>
      <Accordion isOpen={open === 2}>
        <Accordion.Button isOpen={open === 2} onClick={() => setOpen(open === 2 ? 0 : 2)}>
          {t('body.accordion.onboard')}
        </Accordion.Button>
        <Accordion.Body>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic dicta debitis non voluptates beatae excepturi?
          Ut sed hic saepe eveniet!
        </Accordion.Body>
      </Accordion>
      <Accordion isOpen={open === 3}>
        <Accordion.Button isOpen={open === 3} onClick={() => setOpen(open === 3 ? 0 : 3)}>
          {t('body.accordion.engage')}
        </Accordion.Button>
        <Accordion.Body>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic dicta debitis non voluptates beatae excepturi?
          Ut sed hic saepe eveniet!
        </Accordion.Body>
      </Accordion>
      <Accordion isOpen={open === 4}>
        <Accordion.Button isOpen={open === 4} onClick={() => setOpen(open === 4 ? 0 : 4)}>
          {t('body.accordion.nurture')}
        </Accordion.Button>
        <Accordion.Body>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic dicta debitis non voluptates beatae excepturi?
          Ut sed hic saepe eveniet!
        </Accordion.Body>
      </Accordion>
    </div>
  );
};

export default AccordionSection;
