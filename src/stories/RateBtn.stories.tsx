import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import RateBtn from '../components/RateBtn/RateBtn';

export default {
  title: 'Example/Components/RateBtn',
  component: RateBtn,
} as ComponentMeta<typeof RateBtn>;

const Template: ComponentStory<typeof RateBtn> = (args) => <RateBtn {...args} />;

export const DefaultRateBtn = Template.bind({});
DefaultRateBtn.args = {
  value: 4,
};