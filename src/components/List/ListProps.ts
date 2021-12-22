import ListItem from './ListItem';

interface ListProps {
  /**
   * id блока.
   */
  id?: string,

  /**
   * Массив пуктов списка.
   */
  items?: Array<ListItem>,

  /**
   * Темы оформления списка. Некоторые можно групировать друг с другом, а некоторые нельзя.
   */
  theme?: Array<'withGrayItems' | 'withBigDots'>,
}

export default ListProps;
