interface CardProductProps {
  /**
   * Номер апартаментов.
   */
  roomNumber: string,

  /**
   * Тип апартаментов (люкс).
   */
  roomType?: string,

  /**
   * Стоимость апартаментов.
   */
  roomPrice: number,

  /**
   * За какой период указана стоимость, например, "в сутки" или "в неделю".
   */
  priceTime?: string,

  /**
   * Количество отзывов.
   * @default 0
   */
  countReviews?: number,

  /**
   * Оценка или рейтинг апартаментов.
   * @default 0
   */
  rating?: 0 | 1 | 2 | 3 | 4 | 5,

  /**
   * Галерея картинок.
   */
  gallery?: string[],
}

export default CardProductProps;
