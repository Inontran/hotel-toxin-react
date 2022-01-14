interface InputNumberProps {
  /**
   * Минимальное значение.
   */
  min?: number,

  /**
   * Максимальное значение.
   */
  max?: number,

  /**
   * Шаг изменения значение.
   * @default 1
   */
  step?: number,

  /**
   * Значение поля.
   * @default 0
   */
  value?: number,

  /**
   * Имя поля.
   */
  name?: string,

  /**
   * Имя поля.
   */
  readonly?: boolean,
}

export default InputNumberProps;
