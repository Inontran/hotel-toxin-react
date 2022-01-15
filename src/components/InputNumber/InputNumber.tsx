import React from 'react';

import InputNumberProps from './InputNumberProps';
import InputNumberDefaultProps from './InputNumberDefaultProps';
import InputNumberState from './InputNumberState';
import styles from './InputNumber.module.scss';

class InputNumber extends React.Component<InputNumberProps, InputNumberState>{
  static defaultProps: InputNumberDefaultProps = {
    step: 1,
    value: 0,
  };

  constructor(props: InputNumberProps) {
    super(props);
    this.setStateFromProps(props);
  }

  render() {
    const {
      name,
      max,
      min,
      step = InputNumber.defaultProps.step,
      readonly = true,
    } = this.props;

    return (
      <div
        className = { styles.InputNumber }
      >
        <button
          className = { styles.Btn }
          type = 'button'
          onClick = { this.handlerBtnClick }
          value = '-'
          disabled = { this.state.disabledDecreasingBtn }
        >
          <span className = { styles.BtnText }>-</span>
        </button>
        <input
          className = { styles.Input }
          type = 'number'
          name = { name }
          max = { max }
          min = { min }
          step = { step }
          readOnly = { readonly }
          value = { this.state.value }
        />
        <button
          className = { styles.Btn }
          type = 'button'
          onClick = { this.handlerBtnClick }
          value = '+'
          disabled = { this.state.disabledIncreasingBtn }
        >
          <span className = { styles.BtnText }>+</span>
        </button>
      </div>
    );
  }

  shouldComponentUpdate(nextProps: InputNumberProps, nextState: InputNumberState): boolean {
    const {
      max,
      min,
      value,
    } = this.props;

    const isChangedMin = nextProps.min !== min;
    const isChangedMax = nextProps.max !== max;
    const isChangedValue = nextProps.value !== value;
    const resultCondition = isChangedMin || isChangedMax || isChangedValue;
    if (resultCondition) {
      this.setStateFromProps(nextProps);
      return false;
    }

    const isChangedPropState = nextProps !== this.props || nextState !== this.state;
    return isChangedPropState;
  }

  private handlerBtnClick = (event: React.MouseEvent) => {
    const btn = event.currentTarget as HTMLButtonElement;
    switch (btn.value) {
      case '-': {
        this.changeValue(true);
        break;
      }

      case '+': {
        this.changeValue();
        break;
      }
    }
  };

  /**
   * @param decrease Если параметр равен 'true', то уменьшить текущее значение на 1 шаг. Иначе увеличить на 1 шаг.
   */
  private changeValue = (decrease: boolean = false) => {
    const newState: InputNumberState = {
      value: 0,
      disabledDecreasingBtn: false,
      disabledIncreasingBtn: false,
    };
    const {
      max,
      min,
      step = InputNumber.defaultProps.step,
    } = this.props;
    
    if (decrease) {
      newState.value = this.state.value - step;
      if (min !== undefined && newState.value <= min) {
        newState.value = min;
        newState.disabledDecreasingBtn = true;
      }
    } else {
      newState.value = this.state.value + step;
      if (max !== undefined && newState.value >= max) {
        newState.value = max;
        newState.disabledIncreasingBtn = true;
      }
    }

    if (this.state.value !== newState.value) {
      this.setState(newState);
    }
  }

  private setStateFromProps(props: InputNumberProps) {
    let initialValue = props.value || this.props.value || InputNumber.defaultProps.value;
    if (props.min !== undefined && initialValue < props.min) {
      initialValue = props.min;
    }
    if (props.max !== undefined && initialValue > props.max) {
      initialValue = props.max;
    }

    const newState: InputNumberState = {
      value: initialValue,
      disabledDecreasingBtn: initialValue === props.min,
      disabledIncreasingBtn: initialValue === props.max,
    };
    
    if (this.state) {
      this.setState(newState);
    } else {
      this.state = newState;
    }
  }
}

export default InputNumber;
