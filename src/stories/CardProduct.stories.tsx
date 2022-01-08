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


const Template: ComponentStory<typeof CardProduct> = (args) => {
  return <div style = {{ width: '320px' }}>
    <CardProduct {...args}/>
  </div>
};

export const DefaultCardProduct = Template.bind({});
const DefaultCardProductArgs: CardProductProps = {
  price: '9 990' + RUBLE_SIGN,
  roomNumber: '888',
  roomType: 'люкс',
  countReviews: 145,
  rating: 3,
}
DefaultCardProduct.args = DefaultCardProductArgs;

export const CardProductWithGallery = Template.bind({});
const CardProductWithGalleryArgs: CardProductProps = {
  price: '9 990' + RUBLE_SIGN,
  roomNumber: '888',
  roomType: 'люкс',
  countReviews: 145,
  rating: 3,
  gallery: [
    require('./assets/image-1.jpg'),
    require('./assets/image-2.jpg'),
    require('./assets/image-3.jpg'),
    require('./assets/image-4.jpg'),
  ]
}
CardProductWithGallery.args = CardProductWithGalleryArgs;
