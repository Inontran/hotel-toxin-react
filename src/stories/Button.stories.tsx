import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../components/Button/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultButton.args = {
  text: 'Button',
};

export const Purple = Template.bind({});
Purple.args = {
  text: 'Button',
  theme: ['purple'],
};

export const White = Template.bind({});
White.args = {
  text: 'Button',
  theme: ['white'],
};
