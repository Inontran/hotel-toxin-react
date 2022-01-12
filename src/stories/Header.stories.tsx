import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import Header, {
  HeaderProps,
} from '../components/Header/Header';

export default {
  title: 'Example/Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
const LoggedInArgs: HeaderProps = {
  username: 'Cosmin Negoita',
  menuItems: [
    {
      href: '/mock-address/change-me',
      name: 'Home',
    },
    {
      href: '/mock-address/change-me',
      name: 'About Us',
    },
    {
      href: '/mock-address/change-me',
      name: 'Services',
    },
    {
      href: '/mock-address/change-me',
      name: 'Careers',
    },
    {
      href: '/mock-address/change-me',
      name: 'News',
    },
    {
      href: '/mock-address/change-me',
      name: 'Documentation',
    },
  ]
};
LoggedIn.args = LoggedInArgs;

export const LoggedOut = Template.bind({});
const LoggedOutProps: HeaderProps = {
  buttonRegHref: '/mock-address/change-me',
  buttonLoginHref: '/mock-address/change-me',
  menuItems: [
    {
      href: '/mock-address/change-me',
      name: 'О нас',
    },
    {
      href: '/mock-address/change-me',
      name: 'Услуги',
    },
    {
      href: '/mock-address/change-me',
      name: 'Вакансии',
    },
    {
      href: '/mock-address/change-me',
      name: 'Новости',
    },
    {
      href: '/mock-address/change-me',
      name: 'Соглашения',
    },
  ]
}
LoggedOut.args = LoggedOutProps;
