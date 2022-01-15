import React from 'react';

import ListProps from './ListProps';
import ListThemes from './ListThemes';
import styles from './List.module.scss';

const List = ({
  items = [],
  theme = [],
  ...props
}: ListProps) => {
  const blockClasses = [styles.List];

  if (theme.indexOf(ListThemes.withGrayItems) != -1) {
    blockClasses.push(styles.withGrayItems);
  }
  if (theme.indexOf(ListThemes.withBigDots) != -1) {
    blockClasses.push(styles.withBigDots);
  }

  return (
    <ul className = { blockClasses.join(' ') }>
      {
        items.map((item) => {
          return (
            <li
              className = { styles.Item }
              key = { Math.random() * 1000 }
            >
              {
                item.href
                ? <a href = { item.href } className = { styles.ItemLink }>
                  {item.text}
                </a>
                : item.text
              }
            </li>
          );
        })
      }
    </ul>
  );
};

export default List;
