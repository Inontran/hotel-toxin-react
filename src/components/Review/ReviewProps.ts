import LikeBtnProps from '../LikeBtn/LikeBtnProps';

interface ReviewProps {
  /**
   * Фотография человека, оставивший отзыв.
   */
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
