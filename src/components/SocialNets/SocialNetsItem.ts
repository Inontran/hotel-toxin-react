interface SocialNetsItem {
  /**
   * Адрес ссылки.
   */
  href: string,

  /**
   * Путь до иконки.
   */
  src: string,

  /**
   * Текст иконки.
   */
  alt?: string,

  /**
   * Подсказка иконки.
   */
  title?: string,
}

export default SocialNetsItem;
