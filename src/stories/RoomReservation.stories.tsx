import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import { RUBLE_SIGN } from '../shared/constants';
import RoomReservation, {
  RoomReservationProps,
} from '../components/Forms/RoomReservation/RoomReservation';

export default {
  title: 'Example/Components/Forms/RoomReservation',
  component: RoomReservation,
} as ComponentMeta<typeof RoomReservation>;


const Template: ComponentStory<typeof RoomReservation> = (args) => {
  return <div style = {{ width: '380px' }}>
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
      name: '9 990₽ х 4 суток',
      price: 666
    },
    {
      name: 'Сбор за услуги: скидка 2 179' + RUBLE_SIGN,
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
