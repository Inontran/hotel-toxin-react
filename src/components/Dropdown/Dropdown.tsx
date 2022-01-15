import React, {
  RefObject,
} from 'react';

import InputText, {
  InputTextThemes,
} from '../InputText/InputText';

import DropdownProps from './DropdownProps';
import DropdownState from './DropdownState';
import DropdownThemes from './DropdownThemes';
import styles from './Dropdown.module.scss';

class Dropdown extends React.Component<DropdownProps, DropdownState> {
  private dropdownRef: RefObject<HTMLDivElement>;

  constructor(props: DropdownProps) {
    super(props);

    this.state = {
      isShow: this.props.isShow || false,
    };

    this.dropdownRef = React.createRef();
  }

  render() {
    const blockClasses = this.getBlockClasses();
    
    return (
      <div
        className = { blockClasses.join(' ') }
        ref = { this.dropdownRef }
        tabIndex = { this.props.tabIndex || 1 }
        onBlur = { this.hideDropdown }
      >
        <div className = { styles.InputWrapper }>
          <InputText
            theme = { this.getInputClasses() }
            label = { this.props.label }
            readOnly = { true }
            onClick = { this.toggleDropdown }
            {...this.props.inputTextProps}
          />
          <button
            className = { styles.Arrow }
            type = 'button'
            onClick = { this.toggleDropdown }
          ></button>
        </div>
        {
          this.props.children &&
          <div className = { styles.Content }>
            <div className = { styles.ContentWrapper }>
              { this.props.children }
            </div>
          </div>
        }
      </div>
    );
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

  private toggleDropdown = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  private hideDropdown = (event: React.FocusEvent) => {
    // условие работает неправильно при выборе даты следующего или предыдущего месяца в календаре.
    // возможно из-за того, что ячейка с датой удаляется из DOM после клика.
    if (!event.currentTarget.contains(event.relatedTarget)) {
      this.setState({
        isShow: false,
      });
    }
  };

  private getBlockClasses(): string[]{
    const {
      theme = []
    } = this.props;
    const blockClasses = [styles.Dropdown];

    const hasThemeWithDates = theme.indexOf(DropdownThemes.withDates) !== undefined
      && theme.indexOf(DropdownThemes.withDates) >= 0;
    if (hasThemeWithDates) {
      blockClasses.push(styles.withDates);
    }

    const hasThemeAlignRight = theme.indexOf(DropdownThemes.alignRight) !== undefined
      && theme.indexOf(DropdownThemes.alignRight) >= 0;
    if (hasThemeAlignRight) {
      blockClasses.push(styles.align_right);
    }

    if (this.state.isShow) {
      blockClasses.push(styles.aсtivated);
    }

    return blockClasses;
  }

  private getInputClasses(): InputTextThemes[] {
    const {
      theme = []
    } = this.props;
    const inputTextModifiers = [InputTextThemes.dropdown];
    const hasThemeWithDates = theme.indexOf(DropdownThemes.withDates) !== undefined
      && theme.indexOf(DropdownThemes.withDates) >= 0;
    
    if ( ! hasThemeWithDates && this.state.isShow) {
      inputTextModifiers.push(InputTextThemes.dropdown_activated);
    }

    return inputTextModifiers;
  }
}

export {
  DropdownProps,
  DropdownState,
  DropdownThemes,
};
export default Dropdown;
