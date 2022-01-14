import DropdownProps from './DropdownProps';

interface DropdownDatepickerProps extends DropdownProps {
  /**
   * Минимально возможная дата.
   */
  minDate?: Date,

  /**
   * Функция обратного вызова после изменения выбранных дат.
   */
  onChange?: (selectedDates: Date[]) => void,
}

export default DropdownDatepickerProps;
