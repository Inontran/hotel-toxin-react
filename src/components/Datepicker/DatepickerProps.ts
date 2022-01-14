interface AirDatepickerProps {
  /**
   * Минимальная дата, которую можно выбрать.
   */
  minDate?: Date,

  /**
   * Выбранные даты.
   */
  selectedDates?: Date[] | string[] | number[],

  /**
   * Функция обратного вызова после сброса выбранных дат.
   */
  resetCallback?: () => void,

  /**
   * Функция обратного вызова после подтверждения выбранных дат.
   */
  submitCallback?: (selectedDates: Date[]) => void,

  /**
   * Функция обратного вызова после изменения выбранных дат.
   */
  onChange?: (selectedDates: Date[]) => void,
}

export default AirDatepickerProps;
