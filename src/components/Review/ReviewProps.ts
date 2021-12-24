import LikeBtnProps from '../LikeBtn/LikeBtnProps';

interface ReviewProps {
  /**
   * Id блока.
   */
  id?: string,

  /**
   * Фотография человека, оставивший отзыв.
   */
  // avatar = require('@/shared/img/user-avatar-example.jpg').default,
  avatar?: string,

  /**
   * Поставил ли лайк пользователь, который просматривает данный отзыв.
   * А также количество лайков этого отзыва.
   */
  likeBtnProps?: LikeBtnProps,

  /**
   * Имя пользователя, написавший отзыв.
   */
  username: string,

  /**
   * Когда опубликовали отзыв.
   */
  datetime: string,

  /**
   * Текст отзыва.
   */
  textReview: string,
}

export default ReviewProps;
