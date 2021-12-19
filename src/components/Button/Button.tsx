import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  /**
   * @description id блока.
   * @type {string}
   */
  id?: string,

  /**
   * @description Ссылка кнопки. Если есть эта опция, то тег будет "а", иначе "button".
   * @type {string}
   */
  href?: string,

  /**
   * @description Tabindex кнопки.
   * @type {number}
   */
  tabIndex?: number,

  /**
   * @description Тип кнопки. По умолчанию "button".
   * @type {string}
   * @defaultvalue 'button'
   */
  type?: 'button' | 'submit' | 'reset' | undefined,

  /**
   * @description Текст кнопки.
   * @type {string}
   * @defaultvalue 'Click me'
   */
  text?: string,

  /**
   * @description Размер кнопки.
   * @type {string}
   * @defaultvalue 'default'
   */
  size?: 'default' | 'md' | undefined,

  /**
   * @description Ширина кнопки.
   * @type {string}
   * @defaultvalue 'auto'
   */
  width?: 'auto' | 'full-wide' | undefined,

  /**
   * @description Темы оформления кнопки. Некоторые можно групировать друг с другом, а некоторые нельзя.
   * @type {Array<string>}
   */
  theme?: Array<'purple' | 'white' | 'adaptedForHeader' | 'theme_arrow'> | undefined,
}

const Button = ({
  id = undefined,
  href = undefined,
  tabIndex = undefined,
  type = 'button',
  text = 'Click me',
  size = 'default',
  width = 'auto',
  theme = [],
  ...props
}: ButtonProps) => {
  const classes = [styles.Button];

  switch (size) {
    case 'md':{
      classes.push(styles.size_md);
      break;
    }
  };

  switch (width) {
    case 'full-wide':{
      classes.push(styles.wide);
      break;
    }
  };

  if (theme.indexOf('purple') != -1) {
    classes.push(styles.filled_blueGreenGradient);
  }
  if (theme.indexOf('white') != -1) {
    classes.push(styles.outlined);
  }
  if (theme.indexOf('adaptedForHeader') != -1) {
    classes.push(styles.adaptedForHeader);
  }
  if (theme.indexOf('theme_arrow') != -1) {
    classes.push(styles.theme_arrow);
  }

  if (href) {
    return (
      <a
        id = { id || undefined }
        className = { classes.join(' ') }
        tabIndex = { tabIndex || undefined }
        href = { href || undefined }
        {...props}
      >
        {
          text && <span className = { styles.Text }>{text}</span>
        }
      </a>
    )
  } else {
    return (
      <button
        id = { id || undefined }
        className = { classes.join(' ') }
        tabIndex = { tabIndex || undefined }
        type = { type || undefined }
        {...props}
      >
        {
          text && <span className = { styles.Text }>{text}</span>
        }
      </button>
    )
  }

};

export default Button;