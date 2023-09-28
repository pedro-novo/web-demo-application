import { Meta, StoryObj } from '@storybook/react';

import ButtonStyled from './button-styled';

const meta: Meta<typeof ButtonStyled> = {
  component: ButtonStyled,
  title: 'Buttons/Button Styled',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['contained', 'outlined', 'text'],
    },
    text: {
      control: { type: 'text' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

/** A simple Contained Button */
export const Contained: Story = {
  args: {
    variant: 'contained',
    text: 'Contained',
    uppercase: true,
  },
};

/** A simple Outlined Button */
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    text: 'Outlined',
    uppercase: true,
  },
};

/** A simple Text Button */
export const Text: Story = {
  args: {
    variant: 'text',
    text: 'Text',
    uppercase: true,
  },
};

export const GroupedButtons: Story = {
  render: (_args) => (
    <div className='w-max px-10 py-20 flex flex-col items-center justify-center gap-4 border-2'>
      <ButtonStyled variant='contained' text='Contained' uppercase />
      <ButtonStyled variant='outlined' text='Outlined' uppercase />
      <ButtonStyled variant='text' text='Text' uppercase />
    </div>
  ),
};
