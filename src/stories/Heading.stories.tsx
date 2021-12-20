import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import Heading from '../components/Heading/Heading';

export default {
  title: 'Example/Components/Heading',
  component: Heading,
} as ComponentMeta<typeof Heading>;


const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const LargeHeading = Template.bind({});
LargeHeading.args = {
  text: 'This one is the sub-section or widget title',
  size: 'large',
  tag: 'h1',
};

export const MiddleHeading = Template.bind({});
MiddleHeading.args = {
  text: 'Next one is the item title inside widgets',
  size: 'middle',
  tag: 'h2',
};

export const SmallHeading = Template.bind({});
SmallHeading.args = {
  text: 'This is a label or CTA text',
  size: 'small',
  tag: 'h3',
};
