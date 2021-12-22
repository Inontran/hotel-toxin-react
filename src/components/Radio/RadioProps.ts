interface RadioProps {
  /**
   * id блока.
   */
  id?: string,

  /**
   * Tabindex радио-кнопки.
   */
  tabIndex?: number,

  /**
   * Тип поля радио-кнопки. По умолчанию "checkbox".
   * @default 'radio'
   */
  inputType?: 'checkbox' | 'radio',

  /**
   * Текст радио-кнопки.
   */
  text?: string,

  /**
   * Имя поля радио-кнопки.
   */
  name?: string,

  /**
   * Значение input радио-кнопки (атрибут value).
   */
  value?: string | number,

  /**
   * Выбрана ли радио-кнопка или нет (атрибут checked).
   */
  checked?: boolean,
}

export default RadioProps;
