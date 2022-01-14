import React from 'react';

import HeadingProps from './HeadingProps';
import HeadingSizes from './HeadingSizes';
import styles from './Heading.module.scss';

const Heading = ({
  text,
  tag = 'p',
  size,
  ...props
}: HeadingProps) => {
  const classes = [styles.Heading];

  switch (size) {
    case HeadingSizes.large:{
      classes.push(styles.size_large);
      break;
    }
    case HeadingSizes.middle:{
      classes.push(styles.size_middle);
      break;
    }
    case HeadingSizes.small:{
      classes.push(styles.size_small);
      break;
    }
  }

  switch (tag) {
    case 'h1':
      return (
        <h1
          className = { classes.join(' ') }
          { ...props }
        >{text}</h1>
      );

    case 'h2':
      return (
        <h2
          className = { classes.join(' ') }
          { ...props }
        >{text}</h2>
      );

    case 'h3':
      return (
        <h3
          className = { classes.join(' ') }
          { ...props }
        >{text}</h3>
      );

    case 'h4':
      return (
        <h4
          className = { classes.join(' ') }
          { ...props }
        >{text}</h4>
      );

    case 'h5':
      return (
        <h5
          className = { classes.join(' ') }
          { ...props }
        >{text}</h5>
      );

    case 'h6':
      return (
        <h6
          className = { classes.join(' ') }
          { ...props }
        >{text}</h6>
      );

    case 'span':
      return (
        <span
          className = { classes.join(' ') }
          { ...props }
        >{text}</span>
      );
  
    default:
      return (
        <p
          className = { classes.join(' ') }
          { ...props }
        >{text}</p>
      );
  }
};

export {
  HeadingProps,
  HeadingSizes,
};
export default Heading;

