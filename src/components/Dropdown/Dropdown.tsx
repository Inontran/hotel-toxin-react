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
    }

    this.dropdownRef = React.createRef();

    document.addEventListener('click', this.handlerDocumentClick);
  }

  render() {
    const blockClasses = this.getBlockClasses();
    
    return (
      <div
        className = { blockClasses.join(' ') }
        id = { this.props.id }
        ref = { this.dropdownRef }
      >
        <div className = { styles.InputWrapper }>
          <InputText
            theme = { this.getInputClasses() }
            label = { this.props.label }
            readOnly = { true }
            onClick = { this.handlerButtonClick }
            {...this.props.inputTextProps}
          />
          <button
            className = { styles.Arrow }
            type = 'button'
            onClick = { this.handlerButtonClick }
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

  componentWillUnmount() {
    document.removeEventListener('click', this.handlerDocumentClick);
  }

  private handlerButtonClick = (event: React.MouseEvent) => {
    event.preventDefault();
    this.setState({
      isShow: !this.state.isShow,
    });
  }

  private handlerDocumentClick = (event: MouseEvent) => {
    console.log(event);
    const dropdownDOMElement = this.dropdownRef.current;
    if (!dropdownDOMElement) {
      return;
    }
    
    // условие работает неправильно при выборе даты следующего или предыдущего месяца в календаре.
    // возможно из-за того, что ячейка с датой удаляется из DOM после клика.
    const clickOnInnerContent = dropdownDOMElement.contains(event.target as HTMLElement);
    const clickOnDropdown = event.currentTarget === event.target;
    const hideDropdown = !clickOnInnerContent && !clickOnDropdown && this.state.isShow;
    
    if (hideDropdown) {
      this.setState({
        isShow: false,
      });
    }
  }

  private getBlockClasses(): string[]{
    const blockClasses = [styles.Dropdown];
    const hasThemeWithDates = this.props.theme?.indexOf(DropdownThemes.withDates) !== undefined
      && this.props.theme?.indexOf(DropdownThemes.withDates) >= 0;
    if (hasThemeWithDates) {
      blockClasses.push(styles.withDates);
    }

    const hasThemeAlignRight = this.props.theme?.indexOf(DropdownThemes.alignRight) !== undefined
      && this.props.theme?.indexOf(DropdownThemes.alignRight) >= 0;
    if (hasThemeAlignRight) {
      blockClasses.push(styles.align_right);
    }

    if (this.state.isShow) {
      blockClasses.push(styles.aсtivated);
    }

    return blockClasses;
  }

  private getInputClasses(): InputTextThemes[] {
    const inputTextModifiers = [InputTextThemes.dropdown];
    const hasThemeWithDates = this.props.theme?.indexOf(DropdownThemes.withDates) !== undefined
      && this.props.theme?.indexOf(DropdownThemes.withDates) >= 0;
    
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
}
export default Dropdown;
