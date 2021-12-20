import React from 'react';

import styles from './List.module.scss';

interface ListItem {
  /**
   * Ссылка в пункте списка.
   * @type {string}
   */
  href?: string;

  /**
   * Текст в пункте списка.
   * @type {string}
   */
  text: string;
}

interface ListProps {
  /**
   * @description id блока.
   * @type {string}
   */
  id?: string,

  /**
   * @description Массив пуктов списка.
   * @type {Array<ListItem>}
   */
  items?: Array<ListItem>,

  /**
   * @description Темы оформления списка. Некоторые можно групировать друг с другом, а некоторые нельзя.
   * @type {Array<string>}
   */
  theme?: Array<'withGrayItems' | 'withBigDots'>,
}

const List = ({
  id = undefined,
  items = [],
  theme = [],
  ...props
}: ListProps) => {
  const classes = [styles.List];

  if (theme.indexOf('withGrayItems') != -1) {
    classes.push(styles.withGrayItems);
  }
  if (theme.indexOf('withBigDots') != -1) {
    classes.push(styles.withBigDots);
  }

  return (
    <ul
      className = { classes.join(' ') }
      id = { id || undefined }
      { ...props }
    >
      {
        items.map(item => {
          if (item.href) {
            return (
              <li className = { styles.Item }>
                <a href = { item.href } className = { styles.ItemLink }>
                  {item.text}
                </a>
              </li>
            )
          } else {
            return (
              <li className = { styles.Item }>
                { item.text }
              </li>
            )
          }
        })
      }
    </ul>
  );
};

export default List;
