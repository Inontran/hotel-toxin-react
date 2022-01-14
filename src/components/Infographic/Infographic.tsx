import React from 'react';

import InfographicProps from './InfographicProps';
import styles from './Infographic.module.scss';

const Infographic = ({
  id = undefined,
  items = [],
  ...props
}: InfographicProps) => {
  return (
    <ul
      className = { styles.Infographic }
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
              {
                item.src &&
                <div className = { styles.IconWrapper }>
                  <img 
                    className = { styles.Icon }
                    src = { item.src }
                    alt = { item.title || item.text }
                    title = { item.title || item.text }
                  />
                </div>
              }
              <div className = { styles.TextWrapper }>
                <p className = { styles.Title }>{item.title}</p>
                <p className = { styles.Text }>{item.text}</p>
              </div>
            </li>
          );
        })
      }
    </ul>
  );
};

export default Infographic;

