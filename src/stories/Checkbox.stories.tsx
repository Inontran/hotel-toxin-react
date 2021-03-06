import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import Checkbox from '../components/Checkbox/Checkbox';

export default {
  title: 'Example/Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;


const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {
  text: 'Checkbox label',
};

export const RichCheckbox = Template.bind({});
RichCheckbox.args = {
  title: 'Checkbox title',
  text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
};

export const Toggle = Template.bind({});
Toggle.args = {
  text: 'Subscribe',
  theme: ['type_toggle'],
};
