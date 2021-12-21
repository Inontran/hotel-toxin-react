import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import {
  COLORS,
  GRADIENTS,
} from '../shared/constants';

import Colors from './Colors';

export default {
  title: 'Example/Colors',
  component: Colors,
} as ComponentMeta<typeof Colors>;


const Template: ComponentStory<typeof Colors> = (args) => <Colors {...args} />;

export const DefaultColors = Template.bind({});
DefaultColors.args = {
  colorItems: COLORS,
};

export const Gradients = Template.bind({});
Gradients.args = {
  colorItems: GRADIENTS,
};
