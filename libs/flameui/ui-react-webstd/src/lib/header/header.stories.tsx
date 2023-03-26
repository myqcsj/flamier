import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './header';

const Story: Meta<typeof Header> = {
  component: Header,
  title: 'Header',
};
export default Story;

export const Primary: StoryObj<typeof Header> = {
  args: {},
};
