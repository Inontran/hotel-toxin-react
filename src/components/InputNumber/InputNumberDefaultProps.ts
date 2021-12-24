import InputNumberProps from './InputNumberProps';

interface InputNumberDefaultProps extends InputNumberProps {
  /**
   * Шаг изменения значение.
   * @default 1
   */
  step: number,

  /**
   * Значение поля.
   * @default 0
   */
  value: number,
}

export default InputNumberDefaultProps;
