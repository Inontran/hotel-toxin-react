import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import InputNumber from '../components/InputNumber/InputNumber';

export default {
  title: 'Example/Components/InputNumber',
  component: InputNumber,
} as ComponentMeta<typeof InputNumber>;

const Template: ComponentStory<typeof InputNumber> = (args) => <InputNumber {...args} />;

export const DefaultInputNumber = Template.bind({});
DefaultInputNumber.args = {};
