import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import Logo, {
  LogoProps,
} from '../components/Logo/Logo';

export default {
  title: 'Example/Components/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const DefaultLogo = Template.bind({});
const DefaultLogoProps: LogoProps = {
  id: undefined,
  href: '/',
  src: require('../shared/img/logo.svg'),
};
DefaultLogo.args = DefaultLogoProps;
