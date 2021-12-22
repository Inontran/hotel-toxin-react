import React from 'react';

import ListProps from './ListProps';
import styles from './List.module.scss';

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
