import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import SocialNets from '../components/SocialNets/SocialNets';

import IconTwitter from './assets/twitter-icon.svg';
import IconFacebook from './assets/fb-icon.svg';
import IconInsta from './assets/insta-icon.svg';

export default {
  title: 'Example/Components/SocialNets',
  component: SocialNets,
} as ComponentMeta<typeof SocialNets>;


const Template: ComponentStory<typeof SocialNets> = (args) => <SocialNets {...args} />;

export const DefaultSocialNets = Template.bind({});
DefaultSocialNets.args = {
  items: [
    {
      src: IconTwitter,
      href: '//twitter.com/',
      alt: 'twit',
      title: 'Twitter',
    },
    {
      src: IconFacebook,
      href: '//facebook.com/',
      alt: 'fb',
      title: 'Facebook',
    },
    {
      src: IconInsta,
      href: '//instagram.com/',
      alt: 'insta',
      title: 'Instagram',
    },
  ],
};
