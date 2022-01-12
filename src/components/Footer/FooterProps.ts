import FooterThemes from './FooterThemes';
import FooterMenu from './FooterMenu';

interface FooterProps {
  /**
   * Темы оформления компоненты.
   */
  themes?: Array<FooterThemes>,

  /**
   * Текст под логотипом.
   */
  mainText?: string,

  /**
   * Заголовок формы с подпиской.
   */
  subscriptionHeading?: string,

  /**
   * Текст формы подписки.
   */
  subscriptionText?: string,

  /**
   * Текст об авторских правах.
   */
  copyrightText?: string,

  /**
   * Массив колонок пунктов меню.
   */
  menuItems?: Array<FooterMenu>,
}

export default FooterProps;
