interface InputTextProps {
  /**
   * id блока.
   */
  id?: string,

  /**
   * Текст внутри поля, пока в нем отсутствует значение (атрибут placeholder).
   */
  placeholder?: string,

  /**
   * Значение поля (атрибут value).
   */
  value? : string | number,

  /**
   * Тип поля (атрибут type).
   * @default 'text'
   */
  type?: React.HTMLInputTypeAttribute,

  /**
   * Атрибут readonly.
   */
  readonly?: boolean,

  /**
   * Атрибут disabled.
   */
  disabled?: boolean,

  /**
   * Подпись поля.
   */
  label?: string,

  /**
   * Название input (атрибут name).
   */
  name?: string,

  /**
   * Темы оформления текстового поля. Некоторые можно групировать друг с другом, а некоторые нельзя.
   */
  theme?: Array<'theme_subscription' | 'theme_dropdown'>

  /**
   * Маска ввода.
   */
  inputMask?: 'date' | 'email' | string,
}

export default InputTextProps;
