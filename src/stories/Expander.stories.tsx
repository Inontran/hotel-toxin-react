import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import Expander from '../components/Expander/Expander';

export default {
  title: 'Example/Components/Expander',
  component: Expander,
} as ComponentMeta<typeof Expander>;


const Template: ComponentStory<typeof Expander> = (args) => <Expander {...args}>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
  Vero natus aspernatur quis odio ipsam optio nulla cum, quisquam consequatur,
  ullam laborum aperiam ex accusantium ab animi reprehenderit quod voluptatem fugiat!
</Expander>;

export const DefaultExpander = Template.bind({});
DefaultExpander.args = {
  text: 'Expandable checkbox list',
};
