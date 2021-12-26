import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import Dropdown, {
  DropdownThemes,
} from '../components/Dropdown/Dropdown';
import Datepicker from '../components/Datepicker/Datepicker';

export default {
  title: 'Example/Components/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;


const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const DefaultDropdown = Template.bind({});
DefaultDropdown.args = {
  label: 'Default dropdown',
  children: [
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, quasi. Repellendus harum voluptatum numquam doloribus saepe veniam ex eum distinctio rerum cumque sit, velit, recusandae impedit placeat doloremque similique minus?'
  ],
};

export const DropdownWithDatepicker = Template.bind({});
DropdownWithDatepicker.args = {
  label: 'Даты пребывания в отеле',
  theme: [DropdownThemes.withDates],
  children: [
    <Datepicker />
  ],
};
