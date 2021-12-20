import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import Radio from '../components/Radio/Radio';

export default {
  title: 'Example/Components/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;


const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const DefaultRadio = Template.bind({});
DefaultRadio.args = {
  text: 'Radio label',
};
