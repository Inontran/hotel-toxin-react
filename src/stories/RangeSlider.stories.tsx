import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import RangeSlider, {
  RangeSliderProps,
} from '../components/RangeSlider/RangeSlider';

export default {
  title: 'Example/Components/RangeSlider',
  component: RangeSlider,
} as ComponentMeta<typeof RangeSlider>;


const Template: ComponentStory<typeof RangeSlider> = (args) => <RangeSlider {...args} />;

export const DefaultRangeSlider = Template.bind({});
const DefaultRangeSliderProps: RangeSliderProps = {
  label: 'Range Slider',
  val1: 5000,
  val2: 10000,
  max: 15000,
  textBottom: 'Стоимость за сутки пребывания в номере',
}
DefaultRangeSlider.args = DefaultRangeSliderProps;
