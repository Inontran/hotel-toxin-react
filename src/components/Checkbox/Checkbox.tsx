import React from 'react';

import CheckboxProps from './CheckboxProps';
import CheckboxThemes from './CheckboxThemes';
import styles from './Checkbox.module.scss';

const Checkbox = ({
  tabIndex,
  inputType = 'checkbox',
  text,
  title,
  name,
  value,
  checked,
  theme = [],
  ...props
}: CheckboxProps) => {
  const blockClasses = [styles.Checkbox];

  if (theme.indexOf(CheckboxThemes.toggle) != -1) {
    blockClasses.push(styles.type_toggle);
  }

  return (
    <div
      className = { blockClasses.join(' ') }
      { ...props }
    >
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
  );

};

export {
  CheckboxProps,
  CheckboxThemes,
}
export default Checkbox;
