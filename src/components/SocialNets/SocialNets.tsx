import React from 'react';

import SocialNetsProps from './SocialNetsProps';
import styles from './SocialNets.module.scss';

const SocialNets = ({
  items = [],
  ...props
}: SocialNetsProps) => {
  return (
    <ul
      className = { styles.SocialNets }
      { ...props }
    >
      {
        items.map((item) => {
          return (
            <li
              className = { styles.Item }
              key = { Math.random() * 1000 }
            >
              <a
                className = { styles.Link }
                href = { item.href }
                target = '_blank'
                rel = 'noopener noreferrer'
              >
                <img 
                  className = { styles.Icon }
                  src = { item.src }
                  alt = { item.alt || item.title }
                  title = { item.title || item.alt }
                />
              </a>
            </li>
          );
        })
      }
    </ul>
  );
};

export default SocialNets;
