import React from 'react';

import InputText, {
  InputTextThemes,
} from '../InputText/InputText';

import DropdownProps from './DropdownProps';
import DropdownState from './DropdownState';
import DropdownThemes from './DropdownThemes';
import styles from './Dropdown.module.scss';

class Dropdown extends React.Component<DropdownProps, DropdownState> {
  constructor(props: DropdownProps) {
    super(props);

    this.state = {
      isShow: this.props.isShow || false,
    }
  }

  render() {
    const blockClasses = [styles.Dropdown];
    if (this.props.theme?.indexOf(DropdownThemes.withDates) != -1) {
      blockClasses.push(styles.withDates);
    }
    if (this.props.theme?.indexOf(DropdownThemes.alignRight) != -1) {
      blockClasses.push(styles.align_right);
    }

    const inputTextModifiers = [InputTextThemes.dropdown];

    if (this.state.isShow) {
      blockClasses.push(styles.aсtivated);

      if (this.props.theme?.indexOf(DropdownThemes.withDates) === -1) {
        inputTextModifiers.push(InputTextThemes.dropdown_activated);
      }
    }
    
    return (
      <div
        className = { blockClasses.join(' ') }
        id = { this.props.id }
      >
        <div className = { styles.InputWrapper }>
          <InputText
            theme = { inputTextModifiers }
            label = { this.props.label }
            readOnly = { true }
            onClick = { this.onButtonClick }
            {...this.props.inputTextProps}
          />
          <button
            className = { styles.Arrow }
            type = 'button'
            onClick = { this.onButtonClick }
          ></button>
        </div>
        <div className = { styles.Content }>
          <div className = { styles.ContentWrapper }>
            { this.props.children }
          </div>
        </div>
      </div>
    )
  }

  shouldComponentUpdate(nextProps: DropdownProps, nextState: DropdownState): boolean {
    if (nextProps.isShow !== this.props.isShow) {
      this.setState({
        isShow: nextProps.isShow || false,
      });
      return false;
    }

    const isChangedPropState = nextProps !== this.props || nextState !== this.state;
    return isChangedPropState;
  }

  componentDidUpdate(nextProps: DropdownProps, nextState: DropdownState) {
    if (nextState.isShow !== this.state.isShow) {
      if (this.props.toggleCallback) {
        this.props.toggleCallback(this.state.isShow);
      }
    }
  }

  private onButtonClick = (event: React.MouseEvent) => {
    event.preventDefault();
    this.setState({
      isShow: !this.state.isShow,
    });
  }
}

export {
  DropdownProps,
  DropdownState,
  DropdownThemes,
}
export default Dropdown;
