import $ from 'jquery';
import 'air-datepicker';
import moment from 'moment';

import '@/components/button/button';

import './air-datepicker.scss';

class AirDatepicker extends EventTarget{
  _$airDatepicker;
  _datepicker;

  _$submitBtnWrapper;
  _$submitBtn;
  _$resetBtnWrapper;
  _$resetBtn;

  _dates;
  _formattedDates;
  _formattedDateStart;
  _formattedDateEnd;

  constructor($airDatepicker) {
    super();
    this._$airDatepicker = $airDatepicker;
    this._init();
  }

  getDates() {
    return this._dates;
  }

  getFormattedDates() {
    return this._formattedDates;
  }

  getFormattedDateStart() {
    return this._formattedDateStart;
  }

  getFormattedDateEnd() {
    return this._formattedDateEnd;
  }
  
  _init() {
    moment.lang('ru');
    this._eventChange = new CustomEvent('change-air-datepicker');
    this._findDOMElements();
    this._initDatepicker();
    this._bindEventListeners();
    this._addEventListeners();
  }
  
  _findDOMElements() {
    this._$submitBtnWrapper = $('.js-air-datepicker__btn_type_submit', this._$airDatepicker);
    this._$submitBtn = $('.js-air-datepicker__btn_type_submit .js-button', this._$airDatepicker);
    this._$resetBtnWrapper = $('.js-air-datepicker__btn_type_reset', this._$airDatepicker);
    this._$resetBtn = $('.js-air-datepicker__btn_type_reset .js-button', this._$airDatepicker);
  }

  _initDatepicker() {
    let minDateOption;
    const attrMinDate = this._$airDatepicker.data('min-date');
    if (attrMinDate === 'today') {
      minDateOption = new Date();
    } else if (attrMinDate) {
      try {
        minDateOption = new Date(attrMinDate);
      } catch (error) {
        console.debug(error);
      }
    }

    const $datepicker = $('.js-air-datepicker__wrapper', this._$airDatepicker);
    $datepicker.datepicker({
      range: true,
      inline: true,
      navTitles: {
        days: 'MM yyyy',
      },
      minDate: minDateOption,
    });
    
    this._datepicker = $datepicker.data('datepicker');

    if (!this._datepicker.selectedDates.length) {
      this._$resetBtnWrapper.addClass('air-datepicker__btn_hidden');
    }
  }

  _bindEventListeners() {
    this._handlerClickSubmitBtn = this._handlerClickSubmitBtn.bind(this);
    this._handlerClickResetBtn = this._handlerClickResetBtn.bind(this);
  }

  _addEventListeners() {
    this._$submitBtn.on('click', this._handlerClickSubmitBtn);
    this._$resetBtn.on('click', this._handlerClickResetBtn);
  }

  _handlerClickResetBtn(event) {
    event.preventDefault();
    this._datepicker.clear();
    this._dates = [];
    this._formattedDates = '';
    this._formattedDateStart = '';
    this._formattedDateEnd = '';
    this._$resetBtnWrapper.addClass('air-datepicker__btn_hidden');
    this.dispatchEvent(this._eventChange);
  }

  _handlerClickSubmitBtn(event) {
    event.preventDefault();
    this._dates = this._datepicker.selectedDates;
    this._formattedDates = `${moment(this._dates[0]).format('D MMM')} - ${moment(this._dates[1]).format('D MMM')}`;
    this._formattedDateStart = moment(this._dates[0]).format('DD.MM.YYYY');
    this._formattedDateEnd = moment(this._dates[1]).format('DD.MM.YYYY');

    if (this._dates.length) {
      this._$resetBtnWrapper.removeClass('air-datepicker__btn_hidden');
    } else {
      this._$resetBtnWrapper.addClass('air-datepicker__btn_hidden');
    }
    
    this.dispatchEvent(this._eventChange);
  }

  static formatDate(strDate) {
    if (!strDate.length) {
      return '';
    }
    
    let strFormattedDate = '';
    try {
      strFormattedDate = strDate.split('.', 3).reverse().join('-');
    } catch (error) {
      console.debug(error);
    }
    return strFormattedDate;
  }
}

export default AirDatepicker;
