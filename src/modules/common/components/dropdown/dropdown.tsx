import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

interface Props {
  title: string;
  items: { name: string; href: string }[];
}

export const Dropdown: React.FC<Props> = ({ title, items }) => {
  return (
    <Popover className='relative'>
      <Popover.Button className='inline-flex items-center gap-x-1 text-xs text-[#020b5d]'>
        <span>{title}</span>
        <ChevronDownIcon className='h-5 w-5' aria-hidden='true' />
      </Popover.Button>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-200'
        enterFrom='opacity-0 translate-y-1'
        enterTo='opacity-100 translate-y-0'
        leave='transition ease-in duration-150'
        leaveFrom='opacity-100 translate-y-0'
        leaveTo='opacity-0 translate-y-1'
      >
        <Popover.Panel className='absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4'>
          <div className='w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5'>
            {items.map((item) => (
              <a key={item.name} href={item.href} className='block p-2 hover:text-indigo-600'>
                {item.name}
              </a>
            ))}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};