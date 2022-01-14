import React from 'react';

import SocialNetsProps from './SocialNetsProps';
import styles from './SocialNets.module.scss';

const SocialNets = ({
  id = undefined,
  items = [],
  ...props
}: SocialNetsProps) => {
  return (
    <ul
      className = { styles.SocialNets }
      id = { id || undefined }
      { ...props }
    >
      {
        items.map((item, index) => {
          return (
            <li
              className = { styles.Item }
              key = { index }
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
                  alt = { item.alt || item.title || undefined }
                  title = { item.title || item.alt || undefined }
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
