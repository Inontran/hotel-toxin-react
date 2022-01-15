import React from 'react';

import RadioProps from './RadioProps';
import styles from './Radio.module.scss';

const Radio = ({
  tabIndex,
  inputType = 'radio',
  text,
  name,
  value,
  checked,
  ...props
}: RadioProps) => {
  return (
    <div className = { styles.Radio }>
      <label className = { styles.Wrapper }>
        <input className = { styles.Input }
          type = { inputType }
          tabIndex = { tabIndex }
          name = { name }
          value = { value }
          checked = { checked }
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

