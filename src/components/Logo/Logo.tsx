import React from 'react';

import LogoProps from './LogoProps';
import styles from './Logo.module.scss';

const Logo = ({
  href = '/',
  src = require('../../shared/img/logo.svg'),
  ...props
}: LogoProps) => {
  return (
    <a
      className = { styles.Logo }
      href = {href}
    >
      <img
        className = { styles.Img }
        src = {src}
        alt = 'Logo'
      />
    </a>
  );
};

export {
  LogoProps,
};
export default Logo;
