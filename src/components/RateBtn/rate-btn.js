import $ from 'jquery';

import './rate-btn.scss';

class RateBtn {
  _$rateBtn;
  _$input;
  _$stars;

  constructor($rateBtn) {
    this._$rateBtn = $rateBtn;
    this._init();
  }

  _init() {
    this._findDOMElements();
    this._bindEventListeners();
    this._addEventListeners();
  }
  
  _findDOMElements() {
    this._$input = $('.js-rate-btn__input', this._$rateBtn);
    this._$stars = $('.js-rate-btn__star-item', this._$rateBtn);
  }

  _bindEventListeners() {
    this._handlerRateBtnClick = this._handlerRateBtnClick.bind(this);
  }

  _addEventListeners() {
    this._$stars.on('click', this._handlerRateBtnClick);
  }

  _handlerRateBtnClick(event) {
    event.preventDefault();
    const $btn = $(event.currentTarget);
    const starRate = $btn.attr('data-number-star');
    const currentRate = this._$input.val();

    if (starRate === '1' && currentRate === '1') {
      this._$input.val(0);
    } else {
      this._$input.val(starRate);
    }
  }
}

export default RateBtn
