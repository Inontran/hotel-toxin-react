interface SliderRangeProps {
  /**
   * id блока.
   */
  id?: string,

  /**
   * Подпись слайдера.
   */
  label?: string,

  /**
   * Минимальное значение.
   * @default 0
   */
  min?: number,

  /**
   * Максимальное значение.
   */
  max: number,

  /**
   * Шаг изменения значение слайдера.
   * @default 1
   */
  step?: number,

  /**
   * Первое значение слайдера (значение левого ползунка).
   * @default min
   */
  val1?: number,

  /**
   * Второе значение слайдера (значение правого ползунка).
   * @default max
   */
  val2?: number,

  /**
   * Дополнительный текст под слайдером.
   */
  textBottom?: string,
}

export default SliderRangeProps;
