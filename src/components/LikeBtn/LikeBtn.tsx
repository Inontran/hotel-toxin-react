import React from 'react';

import LikeBtnProps from './LikeBtnProps';
import styles from './LikeBtn.module.scss';

class LikeBtn extends React.PureComponent<LikeBtnProps> {
  static defaultProps: LikeBtnProps = {
    value: 0,
    name: 'like',
    isLike: false,
  };

  render() {
    return (
      <label
        className = { styles.LikeBtn }
      >
        <input
          className = { styles.Input }
          type = 'checkbox'
          value = { this.props.value }
          name = { this.props.name }
          checked = { this.props.isLike }
        />
        <span className = { styles.View }>
          <span className = { styles.Amount }>{this.props.value}</span>
        </span>
      </label>
    );
  }
}

export default LikeBtn;
