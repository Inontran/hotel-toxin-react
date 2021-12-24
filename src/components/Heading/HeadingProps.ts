import HeadingSizes from './HeadingSizes';

interface HeadingProps {
  /**
   * id блока.
   */
  id?: string,

  /**
   * Текст в заголовке.
   */
  text?: string,

  /**
   * HTML-тег заголовка. По умолчанию используется '<p></p>'.
   * @default 'p'
   */
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span',

  /**
   * Текст в заголовке.
   */
  size?: HeadingSizes,
}

export default HeadingProps;
