import React from 'react';

import '../../global-styles/global.scss';
import Heading from '../Heading/Heading';

import InputTextProps from './InputTextProps';
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
    if (this.props.theme?.indexOf('theme_subscription') != -1) {
      classesBlock.push(styles.theme_subscription);
    }
    if (this.props.theme?.indexOf('theme_dropdown') != -1) {
      classesBlock.push(styles.theme_dropdown);
    }

    let pattern = this.props.inputMask;
    let placeholder = this.props.placeholder;
    if (this.props.inputMask === 'email') {
      pattern = '^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$';
      if (!placeholder) {
        placeholder = 'Email';
      }
    } else if (this.props.inputMask === 'date') {
      pattern = '(0[1-9]|[12][0-9]|3[01])[.](0[1-9]|1[012])[.](19|20)\d\d ';
      if (!placeholder) {
        placeholder = 'ДД.ММ.ГГГГ';
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
          placeholder = { placeholder }
          name = { this.props.name }
          value = { this.props.value }
          pattern = { pattern }
          readOnly = { this.props.readonly }
          disabled = { this.props.disabled }
        />
      </label>
    )
  }
}

export default InputText;
