interface RateBtnProps {
  /**
   * id блока.
   */
  id?: string,

  /**
   * Название input (атрибут name).
   * @default 'rate'
   */
  name?: string,

  /**
   * Количество выделенных звездочек. Может принимать значение от 0 до 5.
   * @default 0
   */
  value?: 0 | 1 | 2 | 3 | 4 | 5,
  
  /**
   * Отключение возможности выбора количества звезд.
   * @default false
   */
  disabled?: boolean,
}

export default RateBtnProps;
