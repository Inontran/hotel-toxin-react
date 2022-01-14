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
    return (
      <div
        className = { styles.InputNumber }
        id = { this.props.id }
      >
        <button
          className = { styles.Btn }
          type = 'button'
          onClick = { this.onBtnClick }
          value = '-'
          disabled = { this.state.disabledDecreasingBtn }
        >
          <span className = { styles.BtnText }>-</span>
        </button>
        <input
          className = { styles.Input }
          type = 'number'
          name = { this.props.name }
          max = { this.props.max }
          min = { this.props.min }
          step = { this.props.step }
          readOnly = { this.props.readonly }
          value = { this.state.value }
        />
        <button
          className = { styles.Btn }
          type = 'button'
          onClick = { this.onBtnClick }
          value = '+'
          disabled = { this.state.disabledIncreasingBtn }
        >
          <span className = { styles.BtnText }>+</span>
        </button>
      </div>
    );
  }

  shouldComponentUpdate(nextProps: InputNumberProps, nextState: InputNumberState): boolean {
    const isChangedMin = nextProps.min !== this.props.min;
    const isChangedMax = nextProps.max !== this.props.max;
    const isChangedValue = nextProps.value !== this.props.value;
    const resultCondition = isChangedMin || isChangedMax || isChangedValue;
    if (resultCondition) {
      this.setStateFromProps(nextProps);
      return false;
    }

    const isChangedPropState = nextProps !== this.props || nextState !== this.state;
    return isChangedPropState;
  }

  private onBtnClick = (event: React.MouseEvent) => {
    const btn = event.currentTarget as HTMLButtonElement;
    const newState: InputNumberState = {
      value: 0,
      disabledDecreasingBtn: false,
      disabledIncreasingBtn: false,
    };
    const step = this.props.step || InputNumber.defaultProps.step;

    switch (btn.value) {
      case '-': {
        newState.value = this.state.value - step;
        if (this.props.min !== undefined && newState.value <= this.props.min) {
          newState.value = this.props.min;
          newState.disabledDecreasingBtn = true;
        }
        break;
      }

      case '+': {
        newState.value = this.state.value + step;
        if (this.props.max !== undefined && newState.value >= this.props.max) {
          newState.value = this.props.max;
          newState.disabledIncreasingBtn = true;
        }
        break;
      }
    }

    if (this.state.value !== newState.value) {
      this.setState(newState);
    }
  };

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
