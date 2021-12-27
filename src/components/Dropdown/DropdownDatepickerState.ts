import DropdownState from './DropdownState';

interface DropdownDatepickerState extends DropdownState {
  /**
   * Значение поля ввода.
   */
  inputValue: string | number | readonly string[],
}

export default DropdownDatepickerState;
