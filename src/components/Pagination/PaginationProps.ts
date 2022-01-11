interface PaginationProps {
  /**
   * id блока.
   */
  id?: string,

  /**
   * Количество страниц.
   * @default 0
   */
  pageCount?: number,

  /**
   * Текущая выбранная страница.
   * @default 1
   */
  currentPage?: number,
}

export default PaginationProps;
