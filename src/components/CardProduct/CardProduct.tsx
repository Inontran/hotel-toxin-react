import React, { Component } from 'react';

import RateBtn from '../RateBtn/RateBtn';

import CardProductProps from './CardProductProps';
import styles from './CardProduct.module.scss';

class CardProduct extends Component<CardProductProps> {
  constructor(props: CardProductProps) {
    super(props);
  }

  render() {
    const {
      id = undefined,
      roomNumber = this.props.roomNumber,
      roomType = undefined,
      price = this.props.price,
      priceTime = 'в сутки',
      countReviews = 0,
      rating = 0,
      gallery = [],
    }: CardProductProps = this.props;

    return (
      <article
        className = { styles.CardProduct }
        id = { id }
      >

        <div className = { styles.Content }>
          <div className = { styles.RoomInfo }>
            <div className = { styles.RoomName }>
              <span className = { styles.Symbol }>№</span>
              <span className = { styles.RoomNumber }>{roomNumber}</span>
              {
                roomType &&
                <span className = { styles.RoomType }>{roomType}</span>
              }
            </div>
            <div className = { styles.RoomPrice }>
              <span className = { styles.RoomNumberPrice }>{price}</span>
              <span className = { styles.RoomPaymentPeriod }> {priceTime}</span>
            </div>
          </div>
          
          <div className = { styles.ReviewsContainer }>
            <div className = { styles.StarsWrapper }>
              <RateBtn
                value = { rating }
                disabled = { true }
              />
            </div>
              {
                countReviews
                ? <div className = { styles.CountReviewsWrapper }>
                  <span className = { styles.ReviewsCountNumber }>{countReviews}</span>
                  <span className = { styles.ReviewsCountText }> Отзывов</span>
                </div>
                : <div className = { styles.CountReviewsWrapper }>
                <span className = { styles.ReviewsCountText }>нет отзывов</span>
              </div>
              }
          </div>
        </div>
      </article>
    )
  }
}

export {
  CardProductProps,
}
export default CardProduct;
