interface CounterItem {
  /**
   * Подпись счетчика.
   */
  label: string,

  /**
   * Значение поля счетчика.
   * @default 0
   */
  value?: number,

  /**
   * Имя поля счетчика.
   */
  inputName?: string,

  /**
   * Слово, используемое для вывода результата. Например, "1 Спальня".
   * @default label
   */
  textOneItems?: string,

  /**
   * Слово, используемое для вывода результата. Например, "2 Спальни".
   * @default label
   */
  textTwoItems?: string,

  /**
   * Слово, используемое для вывода результата. Например, "5 Спален".
   * @default label
   */
  textManyItems?: string,

  /**
   * Уникальный номер группы счетчиков, которые нужно считать вместе, а не по отдельности.
   */
  groupItemId?: number,
}

export default CounterItem;
