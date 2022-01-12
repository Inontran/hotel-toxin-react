import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import Footer, {
  FooterProps,
} from '../components/Footer/Footer';

export default {
  title: 'Example/Components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const DefaultFooter = Template.bind({});
const DefaultFooterArgs: FooterProps = {
  mainText: 'Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»',
  subscriptionHeading: 'Подписка',
  subscriptionText: 'Получайте специальные предложения и новости сервиса',
  menuItems: [
    {
      title: 'Навигация',
      items: [
        {
          href: '/mock-address/change-me',
          name: 'О нас',
        },
        {
          href: '/mock-address/change-me',
          name: 'Новости',
        },
        {
          href: '/mock-address/change-me',
          name: 'Служба поддержки',
        },
        {
          href: '/mock-address/change-me',
          name: 'Услуги',
        },
      ],
    },
    {
      title: 'О нас',
      items: [
        {
          href: '/mock-address/change-me',
          name: 'О сервисе',
        },
        {
          href: '/mock-address/change-me',
          name: 'Наша команда',
        },
        {
          href: '/mock-address/change-me',
          name: 'Вакансии',
        },
        {
          href: '/mock-address/change-me',
          name: 'Инвесторы',
        },
      ],
    },
    {
      title: 'Служба поддержки',
      items: [
        {
          href: '/mock-address/change-me',
          name: 'Соглашения',
        },
        {
          href: '/mock-address/change-me',
          name: 'Сообщества',
        },
        {
          href: '/mock-address/change-me',
          name: 'Связь с нами',
        },
      ],
    },
  ],
  copyrightText: 'Copyright © 2018 Toxin отель. Все права зачищены.',
};
DefaultFooter.args = DefaultFooterArgs;
