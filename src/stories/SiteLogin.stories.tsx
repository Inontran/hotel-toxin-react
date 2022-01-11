import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import SiteLogin, {
  SiteLoginProps,
} from '../components/Forms/SiteLogin/SiteLogin';

export default {
  title: 'Example/Components/Forms/SiteLogin',
  component: SiteLogin,
} as ComponentMeta<typeof SiteLogin>;

const Template: ComponentStory<typeof SiteLogin> = (args) => <SiteLogin {...args} />;

export const DefaultSiteLogin = Template.bind({});
const DefaultSiteLoginProps: SiteLoginProps = {
  buttonRegHref: 'registration-page',
};
DefaultSiteLogin.args = DefaultSiteLoginProps;
