import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import Review from '../components/Review/Review';

export default {
  title: 'Example/Components/Review',
  component: Review,
} as ComponentMeta<typeof Review>;


const Template: ComponentStory<typeof Review> = (args) => <Review {...args} />;

export const DefaultReview = Template.bind({});
DefaultReview.args = {
  username: 'Мурад Сарафанов',
  datetime: '5 дней назад',
  textReview: 'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
  likeBtnProps: {
    value: 10,
    isLike: true,
  }
};
