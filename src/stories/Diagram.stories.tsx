import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import Diagram from '../components/Diagram/Diagram';

export default {
  title: 'Example/Components/Diagram',
  component: Diagram,
} as ComponentMeta<typeof Diagram>;


const Template: ComponentStory<typeof Diagram> = (args) => <Diagram {...args}/>;

export const DefaultDiagram = Template.bind({});
DefaultDiagram.args = {
  chartNumAwesome: 130,
  chartNumGood: 65,
  chartNumNotbad: 65,
};
