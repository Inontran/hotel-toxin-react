import React from 'react';

import CheckboxProps from './CheckboxProps';
import styles from './Checkbox.module.scss';

const Checkbox = ({
  id = undefined,
  tabIndex = undefined,
  inputType = 'checkbox',
  text = undefined,
  title = undefined,
  name = undefined,
  value = undefined,
  checked = undefined,
  theme = [],
  ...props
}: CheckboxProps) => {
  const classes = [styles.Checkbox];

  if (theme.indexOf('type_toggle') != -1) {
    classes.push(styles.type_toggle);
  }

  return (
    <div
      className = { classes.join(' ') }
      id = { id || undefined }
      { ...props }
    >
      <label className = { styles.Wrapper }>
        <input className = { styles.Input }
          type = { inputType || undefined }
          tabIndex = { tabIndex || undefined }
          name = { name || undefined }
          value = { value || undefined }
          checked = { checked || undefined }
        />
        <span className = { styles.CustomInput }></span>
        {
          title && 
          <span className = { styles.TextWrapper }>
            <span className = { styles.Title }>{title}</span>
            <span className = { styles.SmallText }>{text}</span>
          </span>
        }
        {
          !title && text &&
          <span className = { styles.TextWrapper }>
            <span className = { styles.Text }>{text}</span>
          </span>
        }
      </label>
    </div>
  )

};

export default Checkbox;
