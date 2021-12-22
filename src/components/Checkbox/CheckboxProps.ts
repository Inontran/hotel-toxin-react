interface CheckboxProps {
  /**
   * id блока.
   */
  id?: string,

  /**
   * Tabindex чекбокса.
   */
  tabIndex?: number,

  /**
   * Тип поля чекбокса. По умолчанию "checkbox".
   * @default 'checkbox'
   */
  inputType?: 'checkbox' | 'radio',

  /**
   * Текст чекбокса.
   */
  text?: string,

  /**
   * Заголовок чекбокса.
   */
  title?: string,

  /**
   * Имя поля чекбокса.
   */
  name?: string,

  /**
   * Значение input чекбокса (атрибут value).
   */
  value?: string | number,

  /**
   * Выбран ли чекбокс или нет (атрибут checked).
   */
  checked?: boolean,

  /**
   * Темы оформления чекбокса. Некоторые можно групировать друг с другом, а некоторые нельзя.
   */
  theme?: Array<'type_toggle'>,
}

export default CheckboxProps;