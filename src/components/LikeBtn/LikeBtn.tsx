import React from 'react';

import LikeBtnProps from './LikeBtnProps';
import styles from './LikeBtn.module.scss';

class LikeBtn extends React.PureComponent<LikeBtnProps> {
  render() {
    const {
      value = 0,
      name = 'like',
      isLike,
    } = this.props;

    return (
      <label
        className = { styles.LikeBtn }
      >
        <input
          className = { styles.Input }
          type = 'checkbox'
          value = { value }
          name = { name }
          checked = { isLike }
        />
        <span className = { styles.View }>
          <span className = { styles.Amount }>{value}</span>
        </span>
      </label>
    );
  }
}

export default LikeBtn;
