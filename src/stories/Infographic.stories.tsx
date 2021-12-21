import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import Infographic from '../components/Infographic/Infographic';

import Icon1 from './assets/insert-emoticon.svg';
import Icon2 from './assets/location-city.svg';
import Icon3 from './assets/whatshot.svg';

export default {
  title: 'Example/Components/Infographic',
  component: Infographic,
} as ComponentMeta<typeof Infographic>;


const Template: ComponentStory<typeof Infographic> = (args) => <Infographic {...args} />;

export const DefaultInfographic = Template.bind({});
DefaultInfographic.args = {
  items: [
    {
      src: Icon1,
      title: 'Комфорт',
      text: 'Шумопоглощающие стены',
    },
    {
      src: Icon2,
      title: 'Удобство',
      text: 'Окно в каждой из спален',
    },
    {
      src: Icon3,
      title: 'Уют',
      text: 'Номер оснащен камином',
    },
  ],
};
