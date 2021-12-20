import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import List from '../components/List/List';

export default {
  title: 'Example/Components/List',
  component: List,
} as ComponentMeta<typeof List>;


const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const BulletList = Template.bind({});
BulletList.args = {
  theme: ['withBigDots'],
  items: [
    {
      text: 'Нельзя с питомцами',
    },
    {
      text: 'Без вечеринок и мероприятий',
    },
    {
      text: 'Время прибытия — после 13:00, а выезд до 12:00',
    },
  ],
};

export const ListFromHeaderDropdown = Template.bind({});
ListFromHeaderDropdown.args = {
  theme: ['withGrayItems'],
  items: [
    {
      href: '/',
      text: 'Долгосрочная аренда',
    },
    {
      href: '/',
      text: 'Выгул собак',
    },
    {
      href: '/',
      text: 'Массаж ног',
    },
  ],
};
