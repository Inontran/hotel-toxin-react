interface SiteLoginProps {
  /**
   * id блока.
   */
  id?: string,

  /**
   * Ссылка на страницу регистрации.
   * Если ее не указать, то нижний блок с кнопкой "Создать" отображаться не будет.
   */
  buttonRegHref?: string,
}

export default SiteLoginProps;
