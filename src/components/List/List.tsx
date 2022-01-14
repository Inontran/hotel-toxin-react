import React from 'react';

import ListProps from './ListProps';
import ListThemes from './ListThemes';
import styles from './List.module.scss';

const List = ({
  items = [],
  theme = [],
  ...props
}: ListProps) => {
  const classes = [styles.List];

  if (theme.indexOf(ListThemes.withGrayItems) != -1) {
    classes.push(styles.withGrayItems);
  }
  if (theme.indexOf(ListThemes.withBigDots) != -1) {
    classes.push(styles.withBigDots);
  }

  return (
    <ul
      className = { classes.join(' ') }
      { ...props }
    >
      {
        items.map((item, index) => {
          if (item.href) {
            return (
              <li
                className = { styles.Item }
                key = { index }
              >
                <a href = { item.href } className = { styles.ItemLink }>
                  {item.text}
                </a>
              </li>
            );
          } else {
            return (
              <li
                className = { styles.Item }
                key = { index }
              >
                { item.text }
              </li>
            );
          }
        })
      }
    </ul>
  );
};

export default List;
