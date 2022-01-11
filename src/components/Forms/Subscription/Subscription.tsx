import React from 'react';

import InputText from '../../InputText/InputText';

import styles from './Subscription.module.scss';

class Subscription extends React.PureComponent {
  render() {
    return (
      <form
        className = { styles.Subscription }
        action = 'post'
      >
        <InputText
          inputPattern = 'email'
        />
        <button className = { styles.SubmitBtn }></button>
      </form>
    )
  }
}

export default Subscription;
