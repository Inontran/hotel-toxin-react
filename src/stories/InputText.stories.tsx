import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import InputText from '../components/InputText/InputText';

export default {
  title: 'Example/Components/InputText',
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />;

export const DefaultInputText = Template.bind({});
DefaultInputText.args = {
  label: 'Label',
};

export const WithDateMask = Template.bind({});
WithDateMask.args = {
  label: 'Text field with date mask',
  inputMask: 'date',
};

export const WithEmailMask = Template.bind({});
WithEmailMask.args = {
  label: 'Text field with email mask',
  inputMask: 'email',
};