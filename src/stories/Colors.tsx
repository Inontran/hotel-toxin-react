import React from 'react';

import '../global-styles/global.scss';

import styles from './Colors.module.scss';

interface ColorsProps {
  colorItems: { [prop:string]: string },
}

const Colors = ({
  colorItems = {},
  ...props
}: ColorsProps) => {
  return (
    <ul className = { styles.Colors }>
      {
        Object.keys(colorItems).map((key, index) => {
          return (
            <li 
              key = { index }
              className = { styles.Item }
            >
              <span className = { styles.Rect } style = {{ background: colorItems[key] }}></span>
              <span>
                <span className = { styles.Title }>{key}</span>
                <span className = { styles.Text }>{colorItems[key]}</span>
              </span>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Colors;

