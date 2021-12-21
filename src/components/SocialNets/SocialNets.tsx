import React from 'react';

import styles from './SocialNets.module.scss';

interface SocialNetsItem {
  /**
   * Адрес ссылки.
   * @type {string}
   */
  href: string,

  /**
   * Путь до иконки.
   * @type {string}
   */
  src: string,

  /**
   * Текст иконки.
   * @type {string}
   */
  alt?: string,

  /**
   * Подсказка иконки.
   * @type {string}
   */
  title?: string,
}

interface SocialNetsProps {
  /**
   * @description id блока.
   * @type {string}
   */
  id?: string,

  /**
  * @description Массив пуктов списка.
  * @type {Array<SocialNetsItem>}
  */
  items?: Array<SocialNetsItem>,
}

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
          )
        })
      }
    </ul>
  )
}

export default SocialNets;
