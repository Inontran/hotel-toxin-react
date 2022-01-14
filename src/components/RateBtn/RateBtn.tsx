import React from 'react';

import RateBtnProps from './RateBtnProps';
import RateBtnState from './RateBtnState';
import styles from './RateBtn.module.scss';

class RateBtn extends React.Component<RateBtnProps, RateBtnState> {
  static defaultProps: RateBtnProps = {
    name: 'rate',
    value: 0,
    disabled: false,
  };

  constructor(props: RateBtnProps) {
    super(props);

    this.state = {
      value: this.props.value || 0,
    };
  }
  
  render() {
    return (
      <div
        className = { styles.RateBtn }
        id = { this.props.id }
      >
        <input
          className = { styles.Input }
          type = 'hidden'
          value = { this.state.value }
          name = { this.props.name }
        />
        {
          [1, 2, 3, 4, 5].map((i) => {
            return <button
              className = { styles.StarItem }
              key = { i }
              value = { i }
              type = 'button'
              disabled = { this.props.disabled }
              onClick = { this.onButtonClick }
            ></button>;
          })
        }
      </div>
    );
  }

  shouldComponentUpdate(nextProps: RateBtnProps, nextState: RateBtnState): boolean {
    if (nextProps.value !== this.props.value) {
      this.setState({
        value: nextProps.value || 0,
      });
      return false;
    }

    const isChangedPropState = nextProps !== this.props || nextState !== this.state;
    return isChangedPropState;
  }

  private onButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const btn = event.target as HTMLButtonElement;
    let newValue = 0;
    if (btn.value === '1' && this.state.value === 1) {
      newValue = 0;
    } else {
      newValue = parseInt(btn.value, 10);
    }
    this.setState({
      value: newValue,
    });
  };
}

export default RateBtn;
