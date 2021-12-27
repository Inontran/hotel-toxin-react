interface DiagramProps {
  /**
   * id блока.
   */
  id?: string,

  /**
   * Количество голосов.
   * @default 0
   */
  chartNumAwesome?: number,

  /**
   * Количество голосов.
   * @default 0
   */
  chartNumGood?: number,

  /**
   * Количество голосов.
   * @default 0
   */
  chartNumNotbad?: number,

  /**
   * Количество голосов.
   * @default 0
   */
  chartNumDisappointed?: number,

  /**
   * Подпись количества голосов (chartNumAwesome).
   * @default 'Великолепно'
   */
  labelAwesome?: string,

  /**
   * Подпись количества голосов (chartNumGood).
   * @default 'Хорошо'
   */
  labelGood?: string,

  /**
   * Подпись количества голосов (chartNumNotbad).
   * @default 'Удовлетворительно'
   */
  labelNotbad?: string,

  /**
   * Подпись количества голосов (chartNumDisappointed).
   * @default 'Разочарован'
   */
  labelDisappointed?: string,

  /**
   * Текст общего количества голосов.
   */
  chartCountAllText?: string,
}

export default DiagramProps;
