import React from 'react';

import ButtonProps from './ButtonProps';
import ButtonSizes from './ButtonSizes';
import ButtonThemes from './ButtonThemes';
import ButtonWidth from './ButtonWidth';
import styles from './Button.module.scss';

const Button = ({
  href,
  tabIndex,
  type = 'button',
  text = 'Click me',
  size,
  width,
  theme = [],
  ...props
}: ButtonProps) => {
  const classes = [styles.Button];

  switch (size) {
    case ButtonSizes.md:{
      classes.push(styles.size_md);
      break;
    }
  }

  switch (width) {
    case ButtonWidth.fullWidth:{
      classes.push(styles.wide);
      break;
    }
  }

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
        className = { classes.join(' ') }
        tabIndex = { tabIndex }
        href = { href }
        {...props}
      >
        {
          text && <span className = { styles.Text }>{text}</span>
        }
      </a>
    );
  } else {
    return (
      <button
        className = { classes.join(' ') }
        tabIndex = { tabIndex }
        type = { type }
        {...props}
      >
        {
          text && <span className = { styles.Text }>{text}</span>
        }
      </button>
    );
  }

};

export {
  ButtonProps,
  ButtonSizes,
  ButtonThemes,
  ButtonWidth,
};
export default Button;
