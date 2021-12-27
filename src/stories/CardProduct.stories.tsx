import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RUBLE_SIGN } from '../shared/constants';
import '../global-styles/global.scss';
import CardProduct, {
  CardProductProps,
} from '../components/CardProduct/CardProduct';

export default {
  title: 'Example/Components/CardProduct',
  component: CardProduct,
} as ComponentMeta<typeof CardProduct>;


const Template: ComponentStory<typeof CardProduct> = (args) => <CardProduct {...args}/>;

export const DefaultCardProduct = Template.bind({});
const DefaultCardProductArgs: CardProductProps = {
  price: '9 990' + RUBLE_SIGN,
  roomNumber: '888',
  roomType: 'люкс',
  countReviews: 145,
  rating: 3,
}
DefaultCardProduct.args = DefaultCardProductArgs;
