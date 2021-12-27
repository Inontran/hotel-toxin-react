import $ from 'jquery';
import 'owl.carousel';

import RateBtn from '@/components/rate-btn/rate-btn';
import '@/components/button/button';

import './card-product.scss';

class CardProduct {
  _$card;

  constructor($card) {
    this._$card = $card;
    this._init();
  }

  _init() {
    $('.js-card-product__carousel', this._$card).each(function () {
      $(this).owlCarousel({
        nav: true,
        dots: true,
        items: 1,
        loop: true,
      });
    });

    $('.js-rate-btn', this._$card).each(function() {
      new RateBtn($(this));
    });
  }
}

export default CardProduct
