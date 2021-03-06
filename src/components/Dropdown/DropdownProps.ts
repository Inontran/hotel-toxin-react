import InputTextProps from '../InputText/InputTextProps';
import DropdownThemes from './DropdownThemes';

interface DropdownProps {
  /**
   * Отображется ли содержимое dropdown при инициализации.
   */
  isShow?: boolean,

  /**
   * Параметры поля ввода.
   */
  inputTextProps?: InputTextProps,

  /**
   * Свойство 'label' дочернего блока 'InputText'.
   */
  label?: string,

  /**
   * Свойство 'tabIndex'.
   */
  tabIndex?: number,

  /**
   * Темы оформления выпадающего списка.
   * Некоторые можно групировать друг с другом, а некоторые нельзя.
   */
  theme?: DropdownThemes[],

  /**
   * Функция обратного вызова после открытия и закрытия выпадающего списка.
   */
  toggleCallback?: (isShow: boolean) => void,
}

export default DropdownProps;
