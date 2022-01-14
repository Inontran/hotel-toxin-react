import ButtonSizes from './ButtonSizes';
import ButtonThemes from './ButtonThemes';
import ButtonWidth from './ButtonWidth';

interface ButtonProps {
  /**
   * Ссылка кнопки. Если есть эта опция, то тег будет "а", иначе "button".
   */
  href?: string,

  /**
   * Tabindex кнопки.
   */
  tabIndex?: number,

  /**
   * Тип кнопки. По умолчанию "button".
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset',

  /**
   * Текст кнопки.
   * @default 'Click me'
   */
  text?: string,

  /**
   * Размер кнопки.
   */
  size?: ButtonSizes,

  /**
   * Ширина кнопки.
   */
  width?: ButtonWidth,

  /**
   * Темы оформления кнопки. Некоторые можно групировать друг с другом, а некоторые нельзя.
   */
  theme?: Array<ButtonThemes>,

  /**
   * Optional click handler
   */
  onClick?: () => void;
}

export default ButtonProps;
