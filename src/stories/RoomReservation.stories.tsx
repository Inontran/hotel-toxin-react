import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import { formatPrice } from '../shared/functions';
import RoomReservation, {
  RoomReservationProps,
} from '../components/Forms/RoomReservation/RoomReservation';

export default {
  title: 'Example/Components/Forms/RoomReservation',
  component: RoomReservation,
} as ComponentMeta<typeof RoomReservation>;


const Template: ComponentStory<typeof RoomReservation> = (args) => {
  return <div style = {{ maxWidth: '380px' }}>
    <RoomReservation {...args}/>
  </div>
};

export const DefaultRoomReservation = Template.bind({});
const DefaultRoomReservationArgs: RoomReservationProps = {
  roomPrice: 9990,
  roomNumber: '888',
  roomType: 'люкс',
  listService: [
    {
      name: 'Сбор за услуги: скидка ' + formatPrice(2179),
      price: 0,
      tooltip: 'Да-да, за даром!',
    },
    {
      name: 'Сбор за дополнительные услуги ',
      price: 300,
      tooltip: 'Плоти налоги!',
    },
  ]
}
DefaultRoomReservation.args = DefaultRoomReservationArgs;
