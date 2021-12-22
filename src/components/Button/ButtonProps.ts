interface ButtonProps {
  /**
   * id блока.
   */
  id?: string,

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
   * @default 'default'
   */
  size?: 'default' | 'md',

  /**
   * Ширина кнопки.
   * @default 'auto'
   */
  width?: 'auto' | 'full-wide',

  /**
   * Темы оформления кнопки. Некоторые можно групировать друг с другом, а некоторые нельзя.
   */
  theme?: Array<'purple' | 'white' | 'adaptedForHeader' | 'theme_arrow'>,
}

export default ButtonProps;
