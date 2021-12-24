import React from 'react';

import Heading from '../Heading/Heading';

import InputTextProps from './InputTextProps';
import InputTextThemes from './InputTextThemes';
import styles from './InputText.module.scss';

class InputText extends React.Component<InputTextProps> {
  static defaultProps: InputTextProps = {
    type: 'text',
    theme: [],
  }

  constructor(props: InputTextProps) {
    super(props);
  }

  render() {
    const classesBlock = [styles.InputText];
    if (this.props.theme?.indexOf(InputTextThemes.subscription) != -1) {
      classesBlock.push(styles.theme_subscription);
    }
    if (this.props.theme?.indexOf(InputTextThemes.dropdown) != -1) {
      classesBlock.push(styles.theme_dropdown);
    }

    let attrPattern = this.props.inputPattern;
    let attrPlaceholder = this.props.placeholder;
    if (this.props.inputPattern === 'email') {
      attrPattern = '^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$';
      if (!attrPlaceholder) {
        attrPlaceholder = 'Email';
      }
    } else if (this.props.inputPattern === 'date') {
      attrPattern = '(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)\d\d ';
      if (!attrPlaceholder) {
        attrPlaceholder = 'ДД.ММ.ГГГГ';
      }
    }
    
    return (
      <label
        className = { classesBlock.join(' ') }
        id = { this.props.id }
      >
        { 
          this.props.label &&
          <span className = { styles.Label }>
            <Heading
              text = { this.props.label }
              size = 'small'
              tag = 'span'
            />
          </span>
        }
        <input
          className = { styles.Field }
          type = { this.props.type }
          placeholder = { attrPlaceholder }
          name = { this.props.name }
          value = { this.props.value }
          pattern = { attrPattern }
          readOnly = { this.props.readonly }
          disabled = { this.props.disabled }
        />
      </label>
    )
  }
}

export default InputText;
