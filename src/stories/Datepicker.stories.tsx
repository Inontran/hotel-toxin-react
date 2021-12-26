import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import Datepicker from '../components/Datepicker/Datepicker';

export default {
  title: 'Example/Components/Datepicker',
  component: Datepicker,
} as ComponentMeta<typeof Datepicker>;


const Template: ComponentStory<typeof Datepicker> = (args) => <Datepicker {...args} />;

export const DefaultDatepicker = Template.bind({});
DefaultDatepicker.args = {
  minDate: new Date(),
};
