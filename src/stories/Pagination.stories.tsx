import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import '../global-styles/global.scss';
import Pagination, {
  PaginationProps,
} from '../components/Pagination/Pagination';

export default {
  title: 'Example/Components/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const DefaultPagination = Template.bind({});
const DefaultPaginationProps: PaginationProps = {
  pageCount: 15,
};
DefaultPagination.args = DefaultPaginationProps;
