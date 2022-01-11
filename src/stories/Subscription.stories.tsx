import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import Subscription from '../components/Forms/Subscription/Subscription';

export default {
  title: 'Example/Components/Forms/Subscription',
  component: Subscription,
} as ComponentMeta<typeof Subscription>;

const Template: ComponentStory<typeof Subscription> = (args) => <Subscription {...args} />;

export const DefaultSubscription = Template.bind({});
