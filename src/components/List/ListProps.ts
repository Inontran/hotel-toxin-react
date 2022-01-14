import ListItem from './ListItem';
import ListThemes from './ListThemes';

interface ListProps {
  /**
   * Массив пуктов списка.
   */
  items?: Array<ListItem>,

  /**
   * Темы оформления списка. Некоторые можно групировать друг с другом, а некоторые нельзя.
   */
  theme?: Array<ListThemes>,
}

export default ListProps;
