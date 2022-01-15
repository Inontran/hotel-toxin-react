import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import SiteRegistration, {
  SiteRegistrationProps,
} from '../components/Forms/SiteRegistration/SiteRegistration';

export default {
  title: 'Example/Components/Forms/SiteRegistration',
  component: SiteRegistration,
} as ComponentMeta<typeof SiteRegistration>;

const Template: ComponentStory<typeof SiteRegistration> = (args) => {
  return <div style = {{ maxWidth: '380px' }}>
    <SiteRegistration {...args}/>
  </div>
};

export const DefaultSiteRegistration = Template.bind({});
const DefaultSiteRegistrationProps: SiteRegistrationProps = {
  buttonRegHref: 'registration-page',
};
DefaultSiteRegistration.args = DefaultSiteRegistrationProps;
