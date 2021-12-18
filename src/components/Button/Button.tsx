import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  id?: string,
  href?: string,
  tabIndex?: number,
  type?: 'button' | 'submit' | 'reset' | undefined,
  text?: string,
  size?: 'default' | 'md' | undefined,
  width?: 'auto' | 'full-wide' | undefined,
  theme?: Array<'purple' | 'white' | 'adaptedForHeader'> | undefined,
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
