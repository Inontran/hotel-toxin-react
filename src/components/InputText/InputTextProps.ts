import InputTextThemes from './InputTextThemes';

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
  readOnly?: boolean,

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
  theme?: Array<InputTextThemes>

  /**
   * Маска ввода.
   */
  inputPattern?: 'date' | 'email' | string,

  /**
   * Обработчик клика.
   */
  onClick?: (event: React.MouseEvent) => void;
}

export default InputTextProps;
