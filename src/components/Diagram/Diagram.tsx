import React from 'react';
import Chart from 'chart.js';

import { COLORS } from '../../shared/constants';

import DiagramProps from './DiagramProps';
import DiagramDefaultProps from './DiagramDefaultProps';
import styles from './Diagram.module.scss';

class Diagram extends React.Component<DiagramProps>{
  static defaultProps: DiagramDefaultProps = {
    chartNumAwesome: 0,
    chartNumGood: 0,
    chartNumNotbad: 0,
    chartNumDisappointed: 0,
    labelAwesome: 'Великолепно',
    labelGood: 'Хорошо',
    labelNotbad: 'Удовлетворительно',
    labelDisappointed: 'Разочарован',
    chartCountAllText: 'голосов',
  };

  private chartPictureRef: React.RefObject<HTMLCanvasElement>;

  constructor(props: DiagramProps) {
    super(props);

    this.chartPictureRef = React.createRef();
  }
  
  render() {
    const {
      id = this.props.id || undefined,
      chartNumAwesome = this.props.chartNumAwesome || Diagram.defaultProps.chartNumAwesome,
      chartNumGood = this.props.chartNumAwesome || Diagram.defaultProps.chartNumAwesome,
      chartNumNotbad = this.props.chartNumAwesome || Diagram.defaultProps.chartNumNotbad,
      chartNumDisappointed = this.props.chartNumAwesome || Diagram.defaultProps.chartNumGood,
      labelAwesome = this.props.labelAwesome || Diagram.defaultProps.labelAwesome,
      labelGood = this.props.labelGood || Diagram.defaultProps.labelGood,
      labelNotbad = this.props.labelNotbad || Diagram.defaultProps.labelNotbad,
      labelDisappointed = this.props.labelDisappointed || Diagram.defaultProps.labelDisappointed,
      chartCountAllText = this.props.chartCountAllText || Diagram.defaultProps.chartCountAllText,
    } = this.props;

    const chartCountAllVoices = chartNumAwesome + chartNumGood + chartNumNotbad + chartNumDisappointed;

    return (
      <div
        className = { styles.Diagram }
        id = { id }
      >
        <div className = { styles.DiagramContainer }>
          <div className = { styles.ChartContainer}>
            <div className = { styles.Chart }>
              <canvas
                className = { styles.Picture }
                ref = { this.chartPictureRef }
              ></canvas>
            </div>
            <p className = { styles.Count }>
              <span className = { styles.CountNumber }>{chartCountAllVoices}</span>
              {
                this.props.chartCountAllText &&
                <span className = { styles.CountText }>{chartCountAllText}</span>
              }
            </p>
          </div>
          <ul className = { styles.Legend }>
            <li 
              className = { styles.LegendItem }
              title = { chartNumAwesome.toString() }
            >
              <span className = { styles.LegendItemIcon + ' ' + styles.theme_yellow }></span>
              <span className = { styles.LegendItemText }>{labelAwesome}</span>
            </li>
            <li 
              className = { styles.LegendItem }
              title = { chartNumGood.toString() }
            >
              <span className = { styles.LegendItemIcon + ' ' + styles.theme_green }></span>
              <span className = { styles.LegendItemText }>{labelGood}</span>
            </li>
            <li 
              className = { styles.LegendItem }
              title = { chartNumNotbad.toString() }
            >
              <span className = { styles.LegendItemIcon + ' ' + styles.theme_purple }></span>
              <span className = { styles.LegendItemText }>{labelNotbad}</span>
            </li>
            <li 
              className = { styles.LegendItem }
              title = { chartNumDisappointed.toString() }
            >
              <span className = { styles.LegendItemIcon + ' ' + styles.theme_gray }></span>
              <span className = { styles.LegendItemText }>{labelDisappointed}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.initChart();
  }

  private initChart() {
    if (!this.chartPictureRef.current) {
      return;
    }

    const ctx = this.chartPictureRef.current.getContext('2d');
    if (!ctx) {
      return;
    }

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

    const {
      chartNumAwesome = this.props.chartNumAwesome || Diagram.defaultProps.chartNumAwesome,
      chartNumGood = this.props.chartNumAwesome || Diagram.defaultProps.chartNumAwesome,
      chartNumNotbad = this.props.chartNumAwesome || Diagram.defaultProps.chartNumNotbad,
      chartNumDisappointed = this.props.chartNumAwesome || Diagram.defaultProps.chartNumGood,
      labelAwesome = this.props.labelAwesome || Diagram.defaultProps.labelAwesome,
      labelGood = this.props.labelGood || Diagram.defaultProps.labelGood,
      labelNotbad = this.props.labelNotbad || Diagram.defaultProps.labelNotbad,
      labelDisappointed = this.props.labelDisappointed || Diagram.defaultProps.labelDisappointed,
    } = this.props;

    const data = {
      datasets: [{
        data: [chartNumNotbad, chartNumGood, chartNumAwesome, chartNumDisappointed],
        backgroundColor: [
          gradientPurple,
          gradientGreen,
          gradientYellow,
          gradientGray,
        ],
      }],

      labels: [
        labelAwesome,
        labelGood,
        labelNotbad,
        labelDisappointed,
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

    new Chart(ctx, {
      type: 'doughnut',
      data,
      options,
    });
  }
}

export default Diagram;
