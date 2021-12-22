import React from 'react';

import ExpanderProps from './ExpanderProps';
import ExpanderState from './ExpanderState';
import styles from './Expander.module.scss';

class Expander extends React.Component<ExpanderProps, ExpanderState> {
  constructor(props: ExpanderProps) {
    super(props);

    this.state = {
      isOpen: this.props.isOpen || false,
    };
  }

  render() {
    const blockClasses: Array<string> = [styles.Expander];

    if( this.state.isOpen ) {
      blockClasses.push(styles.activated);
    }

    return (
      <div
        className = { blockClasses.join(' ') }
        id = { this.props.id || undefined }
      >
        <button 
          className = { styles.Btn }
          type = 'button'
          onClick = { this.handleBtnClick }
        >
          <span className = { styles.BtnText }>{this.props.text}</span>
          <span className = { styles.BtnArrow }></span>
        </button>
        <div className = { styles.Content }>
          {this.props.children}
        </div>
      </div>
    )
  }

  shouldComponentUpdate(nextProps: ExpanderProps, nextState: ExpanderState): boolean {
    if (nextProps.isOpen !== this.props.isOpen) {
      this.setState({
        isOpen: nextProps.isOpen || false,
      });
      return false;
    }

    const isChangedPropState = nextProps !== this.props || nextState !== this.state;
    return isChangedPropState;
  }

  private handleBtnClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
}

export default Expander
