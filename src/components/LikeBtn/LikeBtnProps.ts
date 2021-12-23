interface LikeBtnProps {
  /**
   * id блока.
   */
  id?: string,

  /**
   * Значение поля (количество лайков).
   */
  value?: string | number,

  /**
   * Имя поля (атрибут name).
   */
  name?: string,

  /**
   * Есть лайк или нет (атрибут checked).
   */
  isLike?: boolean,
}

export default LikeBtnProps;
