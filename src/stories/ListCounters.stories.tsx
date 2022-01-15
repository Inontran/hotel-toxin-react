import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import ListCounters, {
  ListCountersProps,
} from '../components/ListCounters/ListCounters';

export default {
  title: 'Example/Components/ListCounters',
  component: ListCounters,
} as ComponentMeta<typeof ListCounters>;

const Template: ComponentStory<typeof ListCounters> = (args) => {
  return <div style = {{ maxWidth: '331px' }}>
    <ListCounters {...args} />
  </div>
};

export const DefaultListCounters = Template.bind({});
const DefaultListCountersProps: ListCountersProps = {
  arrayCounters: [
    {
      label: 'Спальни',
      textOneItems: 'Спальня',
      textTwoItems: 'Спальни',
      textManyItems: 'Спален',
    },
    {
      label: 'Кровати',
      textOneItems: 'Кровать',
      textTwoItems: 'Кровати',
      textManyItems: 'Кроватей',
    },
    {
      label: 'Ванные комнаты',
      textOneItems: 'Ванная комната',
      textTwoItems: 'Ванных комнат',
      textManyItems: 'Ванных комнат',
    },
  ],
  onChange: () => { console.log(); }
}
DefaultListCounters.args = DefaultListCountersProps;
