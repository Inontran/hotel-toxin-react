import React from 'react';

import styles from './Infographic.module.scss';

interface InfographicItem {
  /**
   * Путь до иконки.
   * @type {string}
   */
  src?: string,

  /**
   * Заголовок в пункте списка.
   * @type {string}
   */
  title?: string,

  /**
   * Текст в пункте списка.
   * @type {string}
   */
  text?: string,
}

interface InfographicProps {
  /**
   * @description id блока.
   * @type {string}
   */
  id?: string,

  /**
  * @description Массив пуктов списка.
  * @type {Array<InfographicItem>}
  */
  items?: Array<InfographicItem>,
}

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
          )
        })
      }
    </ul>
  )
}

export default Infographic;

