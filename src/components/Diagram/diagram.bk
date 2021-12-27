import $ from 'jquery';
import Chart from 'chart.js';

import { COLORS } from '@/shared/constants';

import './diagram.scss';

class Diagram {
  _$diagram;
  _chart;

  constructor($diagram) {
    this._$diagram = $diagram;
    this._init();
  }

  _init() {
    const $chartPicture = $('.js-diagram__picture', this._$diagram);
    const ctx = $chartPicture.get(0).getContext('2d');
    const gradientPurple = ctx.createLinearGradient(0, 0, 0, 180);
    gradientPurple.addColorStop(0, COLORS.purple);
    gradientPurple.addColorStop(1, '#8BA4F9');

    const gradientGreen = ctx.createLinearGradient(0, 0, 0, 180);
    gradientGreen.addColorStop(0, COLORS.green);
    gradientGreen.addColorStop(1, '#66D2EA');

    const gradientYellow = ctx.createLinearGradient(0, 0, 0, 180);
    gradientYellow.addColorStop(0, '#FFE39C');
    gradientYellow.addColorStop(1, '#FFBA9C');

    const gradientGray = ctx.createLinearGradient(0, 0, 0, 180);
    gradientGray.addColorStop(0, '#919191');
    gradientGray.addColorStop(1, '#3D4975');

    const num1 = this._$diagram.attr('data-num-1') ? this._$diagram.attr('data-num-1') : 0;
    const num2 = this._$diagram.attr('data-num-2') ? this._$diagram.attr('data-num-2') : 0;
    const num3 = this._$diagram.attr('data-num-3') ? this._$diagram.attr('data-num-3') : 0;
    const num4 = this._$diagram.attr('data-num-4') ? this._$diagram.attr('data-num-4') : 0;

    const data = {
      datasets: [{
        data: [num3, num2, num1, num4],
        backgroundColor: [
          gradientPurple,
          gradientGreen,
          gradientYellow,
          gradientGray,
        ],
      }],

      labels: [
        'Удовлетворительно',
        'Хорошо',
        'Великолепно',
        'Разочарован',
      ],
    };

    const options = {
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      legend: {
        display: false,
        position: 'right',
        align: 'start',
        labels: {
          boxWidth: 10,
          fontColor: COLORS.dark75,
          fontSize: 14,
          fontFamily: "'Montserrat', 'sans-serif'",
        },
      },
      cutoutPercentage: 90,
    };

    this._chart = new Chart(ctx, {
      type: 'doughnut',
      data,
      options,
    });
  }
}

export default Diagram
