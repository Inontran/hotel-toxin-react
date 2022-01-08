import React, { Component } from 'react';
import {
  A11y,
  Navigation,
  Pagination,
  Keyboard,
  Mousewheel,
} from 'swiper';
import {
  Swiper,
  SwiperSlide,
} from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/a11y';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/scss/mousewheel';
import 'swiper/scss/keyboard';

import RateBtn from '../RateBtn/RateBtn';

import CardProductProps from './CardProductProps';
import styles from './CardProduct.module.scss';
import './CardProduct.scss';

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
        className = { styles.CardProduct + ' CardProduct' }
        id = { id }
      >
        {
          gallery.length > 0 &&
          <div className = { styles.Gallery }>
            <Swiper
              modules = {[Navigation, Pagination, A11y, Keyboard, Mousewheel]}
              navigation
              pagination
              keyboard
              mousewheel
              slidesPerView = {1}
              spaceBetween = {0}
            >
              {
                gallery.map((image, index) => {
                  return <SwiperSlide
                    key = { index }
                  >
                    <div className = { styles.ImgWrapper }>
                      <img
                        className = { styles.Img }
                        src = {image}
                        alt = { 'фото номера ' + roomNumber }
                      />
                    </div>
                  </SwiperSlide>
                })
              }
            </Swiper>
          </div>
        }
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
