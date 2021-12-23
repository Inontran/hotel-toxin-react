import React from 'react';

import LikeBtnProps from './LikeBtnProps';
import styles from './LikeBtn.module.scss';

class LikeBtn extends React.PureComponent<LikeBtnProps> {
  constructor({
    value = 0,
    name = 'like',
    isLike = false,
    ...props
  }: LikeBtnProps) {
    super(props);
  }

  render() {
    return (
      <label
        className = { styles.LikeBtn }
        id = { this.props.id || undefined }
      >
        <input
          className = { styles.Input }
          type = 'checkbox'
          value = { this.props.value }
          name = { this.props.name }
          checked = { this.props.isLike || undefined }
        />
        <span className = { styles.View }>
          <span className = { styles.Amount }>{this.props.value}</span>
        </span>
      </label>
    )
  }
}

export default LikeBtn;
