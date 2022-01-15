import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import Review, {
  ReviewProps,
} from '../components/Review/Review';

export default {
  title: 'Example/Components/Review',
  component: Review,
} as ComponentMeta<typeof Review>;


const Template: ComponentStory<typeof Review> = (args) => <Review {...args} />;

export const DefaultReview = Template.bind({});
const DefaultReviewProps: ReviewProps = {
  username: 'Мурад Сарафанов',
  datetime: new Date('2022-01-11'),
  textReview: 'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
  likeBtnProps: {
    value: 10,
    isLike: true,
  }
};

DefaultReview.args = DefaultReviewProps;
