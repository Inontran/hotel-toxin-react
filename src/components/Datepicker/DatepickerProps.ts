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
}

export default AirDatepickerProps;
