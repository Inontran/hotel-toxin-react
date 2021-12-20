import React from 'react';

import styles from './Heading.module.scss';

interface HeadingProps {
  /**
   * @description id блока.
   * @type {string}
   */
  id?: string,

  /**
   * @description Текст в заголовке.
   * @type {string}
   */
  text?: string,

  /**
   * @description HTML-тег заголовка. По умолчанию используется '<p></p>'.
   * @type {string}
   * @defaultvalue 'p'
   */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span',

  /**
   * @description Текст в заголовке.
   * @type {string}
   */
  size?: 'large' | 'middle' | 'small',
}

const Heading = ({
  id = undefined,
  text = undefined,
  tag = 'p',
  size = undefined,
  ...props
}: HeadingProps) => {
  const classes = [styles.Heading];

  switch (size) {
    case 'large':{
      classes.push(styles.size_large);
      break;
    }
    case 'middle':{
      classes.push(styles.size_middle);
      break;
    }
    case 'small':{
      classes.push(styles.size_small);
      break;
    }
  };

  switch (tag) {
    case 'h1':
      return (
        <h1
          className = { classes.join(' ') }
          id = { id || undefined }
          { ...props }
        >{text}</h1>
      )

    case 'h2':
      return (
        <h2
          className = { classes.join(' ') }
          id = { id || undefined }
          { ...props }
        >{text}</h2>
      )

    case 'h3':
      return (
        <h3
          className = { classes.join(' ') }
          id = { id || undefined }
          { ...props }
        >{text}</h3>
      )

    case 'h4':
      return (
        <h4
          className = { classes.join(' ') }
          id = { id || undefined }
          { ...props }
        >{text}</h4>
      )

    case 'h5':
      return (
        <h5
          className = { classes.join(' ') }
          id = { id || undefined }
          { ...props }
        >{text}</h5>
      )

    case 'h6':
      return (
        <h6
          className = { classes.join(' ') }
          id = { id || undefined }
          { ...props }
        >{text}</h6>
      )

    case 'span':
      return (
        <span
          className = { classes.join(' ') }
          id = { id || undefined }
          { ...props }
        >{text}</span>
      )
  
    default:
      return (
        <p
          className = { classes.join(' ') }
          id = { id || undefined }
          { ...props }
        >{text}</p>
      );
  }
};

export default Heading;

