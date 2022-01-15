import React from 'react';

import Heading, {
  HeadingSizes,
} from '../Heading/Heading';

import InputTextProps from './InputTextProps';
import InputTextThemes from './InputTextThemes';
import styles from './InputText.module.scss';

class InputText extends React.Component<InputTextProps> {
  render() {
    const {
      inputPattern,
      placeholder,
      label,
      type = 'text',
      name,
      value,
      readOnly,
      disabled,
    } = this.props;

    const blockClasses = this.getBlockClasses();

    let attrPattern = inputPattern;
    let attrPlaceholder = placeholder;

    if (inputPattern === 'email') {
      attrPattern = '^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$';
      if (placeholder === undefined) {
        attrPlaceholder = 'Email';
      }
    } else if (inputPattern === 'date') {
      attrPattern = '(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)\d\d ';
      if (placeholder === undefined) {
        attrPlaceholder = 'ДД.ММ.ГГГГ';
      }
    }
    
    return (
      <label className = { blockClasses.join(' ') }>
        { 
          label &&
          <span className = { styles.Label }>
            <Heading
              text = { label }
              size = { HeadingSizes.small }
              tag = 'span'
            />
          </span>
        }
        <input
          className = { styles.Field }
          type = { type }
          placeholder = { attrPlaceholder }
          name = { name }
          value = { value }
          pattern = { attrPattern }
          readOnly = { readOnly }
          disabled = { disabled }
          onClick = { this.props.onClick }
        />
      </label>
    );
  }

  private getBlockClasses(): string[]{
    const {
      theme = []
    } = this.props;
    const blockClasses = [styles.Dropdown];

    if (theme.indexOf(InputTextThemes.subscription) != -1) {
      blockClasses.push(styles.theme_subscription);
    }
    if (theme.indexOf(InputTextThemes.dropdown) != -1) {
      blockClasses.push(styles.theme_dropdown);
    }
    if (theme.indexOf(InputTextThemes.dropdown_activated) != -1) {
      blockClasses.push(styles.theme_dropdown_activated);
    }

    return blockClasses;
  }
}

export {
  InputTextProps,
  InputTextThemes,
};
export default InputText;
