interface AirDatepickerProps {
  /**
   * Id блока.
   */
  id?: string,

  /**
   * Минимальная дата, которую можно выбрать.
   */
  minDate?: Date,

  /**
   * Выбранные даты.
   */
  selectedDates?: Date[] | string[] | number[],

  resetCallback?: () => void,

  submitCallback?: (selectedDates: Date[]) => void,
}

export default AirDatepickerProps;
