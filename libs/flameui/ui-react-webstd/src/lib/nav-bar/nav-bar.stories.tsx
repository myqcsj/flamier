import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './nav-bar';

const meta: Meta<typeof NavBar> = {
  component: NavBar,
  title: 'NavBar',
  argTypes: {
    sticky: {
      control: 'boolean',
      description: 'Does the NavBar stick to the top of the screen without hiding away?',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    className: {
      control: 'none',
      description: 'Allows for a custom set of classes to be appended to the component',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
  },
};
export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
  args: {
    sticky: false,
  },
  render: (args) => (
    <NavBar {...args}>
      <span>Hello, World!</span>
    </NavBar>
  ),
};

export const Sticky: Story = {
  args: {
    ...Default.args,
    sticky: true,
  },
  render: (args) => (
    <NavBar {...args}>
      <span>Hello, World!</span>
    </NavBar>
  ),
};
