import React from 'react';

import Logo from '../Logo/Logo';
import Button, {
  ButtonSizes,
  ButtonThemes,
} from '../Button/Button';

import HeaderProps from './HeaderProps';
import HeaderMenuItem from './HeaderMenuItem';
import HeaderState from './HeaderState';
import styles from './Header.module.scss';

class Header extends React.PureComponent<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);

    this.state = {
      isShowAuthBtns: false,
      isShowMainMenu: false,
    };
  }

  render() {
    const {
      username,
      buttonLoginText = 'Login',
      buttonLoginHref,
      buttonRegText = 'Registration',
      buttonRegHref,
      menuItems = [],
    } = this.props;

    const blockClasses = [styles.Header];

    if (this.state.isShowMainMenu) {
      blockClasses.push(styles.shownMainMenu);
    } else if (this.state.isShowAuthBtns) {
      blockClasses.push(styles.shownAuthBtns);
    }

    return (
      <header
        className = { blockClasses.join(' ') }
      >
        <nav className = { styles.Container }>
          <div className = { styles.Logo }>
            <Logo/>
          </div>
          <ul className = { styles.MainMenu }>
            {
              menuItems?.map((menuItem) => {
                return (
                  <li
                    key = {Math.random() * 100}
                    className = { styles.MainMenuItem }
                  >
                    <a
                      className = { styles.MainMenuLink }
                      href = { menuItem.href }
                    >{menuItem.name}</a>
                  </li>
                );
              })
            }
          </ul>
          {
            username
              ? <>
              <a
                className = { styles.IconBtn + ' ' + styles.type_profile }
                href = '/mock-address/change-me'
                title = 'Профиль'
              >
                <img
                  src = { require('../../shared/img/user-icon.svg') }
                  alt = 'Профиль'
                />
              </a>
              <a
                className = { styles.Username }
                href = '/mock-address/change-me'
              >{username}</a>
            </>
              : <>
              <button
                className = { styles.IconBtn + ' ' + styles.profile }
                type = 'button'
                title = 'Войти/Зарегистрироваться'
                onClick = { this.handlerToggleAuthBtnsClick }
              >
                <img
                  src = { require('../../shared/img/user-icon.svg') }
                  alt = 'Профиль'
                />
              </button>
              <div className = { styles.AuthBtns }>
                <div className = { styles.AuthBtn }>
                  <Button
                    text = { buttonLoginText }
                    href = { buttonLoginHref }
                    size = { ButtonSizes.md }
                    theme = {[ButtonThemes.white, ButtonThemes.adaptedForHeader]}
                  />
                </div>
                <div className = { styles.AuthBtn }>
                  <Button
                    text = { buttonRegText }
                    href = { buttonRegHref }
                    size = { ButtonSizes.md }
                    theme = {[ButtonThemes.purple, ButtonThemes.adaptedForHeader]}
                  />
                </div>
              </div>
            </>
          }
          <button
            className = { styles.IconBtn + ' ' + styles.type_menu }
            type = 'button'
            title = 'Меню'
            onClick = { this.handlerBtnMenuClick }
          >
            <img
              src = { require('../../shared/img/menu-icon.svg') }
              alt = 'Меню'
            />
          </button>
        </nav>
      </header>
    );
  }

  private handlerBtnMenuClick = () => {
    this.setState({
      isShowMainMenu: !this.state.isShowMainMenu,
    });
  };

  private handlerToggleAuthBtnsClick = () => {
    this.setState({
      isShowAuthBtns: !this.state.isShowAuthBtns,
    });
  };
}

export {
  HeaderProps,
  HeaderMenuItem,
};
export default Header;
