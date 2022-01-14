import React from 'react';

import RadioProps from './RadioProps';
import styles from './Radio.module.scss';

const Radio = ({
  id = undefined,
  tabIndex = undefined,
  inputType = 'radio',
  text = undefined,
  name = undefined,
  value = undefined,
  checked = undefined,
  ...props
}: RadioProps) => {
  const classes = [styles.Radio];

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
          text &&
          <span className = { styles.Text }>{text}</span>
        }
      </label>
    </div>
  );

};

export default Radio;

