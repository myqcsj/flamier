import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './footer';

const Story: Meta<typeof Footer> = {
  component: Footer,
  title: 'Footer',
};
export default Story;

export const Primary: StoryObj<typeof Footer> = {
  args: {},
};
