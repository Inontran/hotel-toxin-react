import React from 'react';

import ButtonProps from './ButtonProps';
import ButtonSizes from './ButtonSizes';
import ButtonThemes from './ButtonThemes';
import ButtonWidth from './ButtonWidth';
import styles from './Button.module.scss';

const Button = ({
  id = undefined,
  href = undefined,
  tabIndex = undefined,
  type = 'button',
  text = 'Click me',
  size = undefined,
  width = undefined,
  theme = [],
  ...props
}: ButtonProps) => {
  const classes = [styles.Button];

  switch (size) {
    case ButtonSizes.md:{
      classes.push(styles.size_md);
      break;
    }
  };

  switch (width) {
    case ButtonWidth.fullWidth:{
      classes.push(styles.wide);
      break;
    }
  };

  if (theme.indexOf(ButtonThemes.purple) != -1) {
    classes.push(styles.filled_blueGreenGradient);
  }
  if (theme.indexOf(ButtonThemes.white) != -1) {
    classes.push(styles.outlined);
  }
  if (theme.indexOf(ButtonThemes.adaptedForHeader) != -1) {
    classes.push(styles.adaptedForHeader);
  }
  if (theme.indexOf(ButtonThemes.arrow) != -1) {
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

export {
  ButtonProps,
  ButtonSizes,
  ButtonThemes,
  ButtonWidth,
}
export default Button;
