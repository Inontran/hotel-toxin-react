import HeaderMenuItem from './HeaderMenuItem';

interface HeaderProps {
  username?: string,

  /**
   * Текст кнопки авторизации.
   * @default 'Login'
   */
  buttonLoginText?: string,

  /**
   * Ссылка кнопки авторизации.
   */
  buttonLoginHref?: string,

  /**
   * Текст кнопки регистрации.
   * @default 'Registration'
   */
  buttonRegText?: string,

  /**
   * Ссылка кнопки регистрации.
   */
  buttonRegHref?: string,

  /**
   * Пукнты главного меню сайта.
   */
  menuItems?: Array<HeaderMenuItem>,
}

export default HeaderProps;
