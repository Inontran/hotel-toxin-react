import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import LikeBtn from '../components/LikeBtn/LikeBtn';

export default {
  title: 'Example/Components/LikeBtn',
  component: LikeBtn,
} as ComponentMeta<typeof LikeBtn>;

const Template: ComponentStory<typeof LikeBtn> = (args) => <LikeBtn {...args} />;

export const DefaultLikeBtn = Template.bind({});
DefaultLikeBtn.args = {
  value: 10,
};