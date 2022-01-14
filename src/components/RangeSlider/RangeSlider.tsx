import React from 'react';
import ReactSlider from 'react-slider';

import { RUBLE_SIGN } from '../../shared/constants';
import Heading, {
  HeadingSizes,
} from '../Heading/Heading';

import RangeSliderProps from './RangeSliderProps';
import RangeSliderState from './RangeSliderState';
import styles from './RangeSlider.module.scss';

class RangeSlider extends React.Component<RangeSliderProps, RangeSliderState> {

  constructor(props: RangeSliderProps) {
    super(props);

    this.state = {
      startVal: this.props.val1 || this.props.min || 0,
      endVal: this.props.val2 || this.props.max,
    };
  }

  render() {
    const {
      id = undefined,
      label = undefined,
      min = 0,
      max = 100,
      step = 1,
      textBottom = undefined,
    } = this.props;

    return (
      <div
        className = { styles.RangeSlider }
        id = { id }
      >
        <div className = { styles.LabelWrapper }>
          {
            label &&
            <div className = { styles.Label }>
              <Heading 
                text = {label}
                size = {HeadingSizes.small}
                tag = 'span'
              />
            </div>
          }
          <div className = { styles.FormattedRangePrice }>
            { this.state.startVal + RUBLE_SIGN + ' - ' + this.state.endVal + RUBLE_SIGN }
          </div>
        </div>

        <ReactSlider
          className = { styles.Slider }
          thumbClassName = { styles.Handle }
          trackClassName = { styles.Track }
          min = {min}
          max = {max}
          step = {step}
          value={[this.state.startVal, this.state.endVal]}
          ariaLabel={['Левая ручка', 'Правая ручка']}
          pearling
          renderTrack = { this.renderTrack }
          onChange = { this.handlerChangeSlider }
        />
        <input
          type = 'hidden'
          name = 'min-val'
          value = {this.state.startVal}
        />
        <input
          type = 'hidden'
          name = 'max-val'
          value = {this.state.endVal}
        />

        {
          textBottom &&
          <p className = { styles.Text }>{textBottom}</p>
        }
      </div>
    );
  }

  shouldComponentUpdate(nextProps: RangeSliderProps, nextState: RangeSliderState): boolean{
    if (nextProps.val1 !== this.props.val1 || nextProps.val2 !== this.props.val2) {
      this.setState({
        startVal: nextProps.val1 || this.props.min || 0,
        endVal: nextProps.val2 || this.props.max,
      });
      return false;
    }

    const isChangedPropState = nextProps !== this.props || nextState !== this.state;
    return isChangedPropState;
  }

  private handlerChangeSlider = (values: number[]) => {
    this.setState({
      startVal: values[0],
      endVal: values[1],
    });
  };

  private renderTrack = (props: any, state: {
    index: number;
    value: number[];
  }): JSX.Element | null => {
    if (state.index !== 1) {
      return null;
    }

    return (
      <div
        {...props}
        className = { `${styles.Track} ${styles['Track_' + state.index]}`}
      ></div>
    );
  };
}

export {
  RangeSliderProps,
  RangeSliderState,
};
export default RangeSlider;
