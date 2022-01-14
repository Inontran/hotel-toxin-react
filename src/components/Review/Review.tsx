import React from 'react';

import noPhoto from '../../shared/img/no-photo-user.svg';
import LikeBtn from '../LikeBtn/LikeBtn';

import ReviewProps from './ReviewProps';
import styles from './Review.module.scss';

const Review = ({
  id,
  avatar = noPhoto,
  likeBtnProps,
  username,
  datetime,
  textReview,
  ...props
}: ReviewProps) => {
  return (
    <article
      className = { styles.Review }
      id = { id }
    >
      <header
        className = { styles.Header }
      >
        <div className = { styles.AvatarWrapper }>
          <img
            className = { styles.Avatar }
            src = { avatar }
            alt = { 'Фото ' + username }
            title = { 'Фото ' + username }
          />
        </div>
        <div className = { styles.HeaderText }>
          <p className = { styles.Username }>{username}</p>
          {
            datetime &&
            <time
              className = { styles.Time }
              dateTime = { datetime }
            >{datetime}</time>
          }
        </div>
      </header>
      <div className = { styles.Content }>
        <div className = { styles.LikeWrapper }>
          <LikeBtn {...likeBtnProps} />
        </div>
        <p className = { styles.Text }>{textReview}</p>
      </div>
    </article>
  );
};

export default Review;
