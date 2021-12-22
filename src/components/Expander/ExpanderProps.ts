interface ExpanderProps {
  /**
   * id блока.
   */
  id?: string,

  /**
   * Текст в кнопке раскрывающегося списка.
   */
  text: string,

  /**
   * Состояние списка: раскрыт или свернут.
   */
  isOpen?: boolean,
}

export default ExpanderProps;
