import React from 'react';
import AirDatepicker, {
  AirDatepickerOptions
} from 'air-datepicker';

import Button from '../Button/Button';

import DatepickerProps from './DatepickerProps';
import DatepickerState from './DatepickerState';
import './AirDatepicker.scss';
import styles from './Datepicker.module.scss';

class Datepicker extends React.Component<DatepickerProps, DatepickerState> {
  private airDatepickerWrapperRef: React.RefObject<HTMLDivElement>;
  private airDatepicker!: AirDatepicker;

  constructor(props: DatepickerProps) {
    super(props);

    this.state = {
      isResetBtnVisible: false,
    };

    this.airDatepickerWrapperRef = React.createRef();
  }

  render() {
    return (
      <div
        className = { styles.Datepicker }
      >
        <div
          className = { styles.Wrapper }
          ref = { this.airDatepickerWrapperRef }
        ></div>
        <div className = { styles.Btns }>
          {
            this.state.isResetBtnVisible &&
            <div className = { styles.Btn + ' ' + styles.Btn_type_reset }>
              <Button
                text = 'Очистить'
                onClick = { this.onResetButtonClick }
              />
            </div>
          }
          <div className = { styles.Btn + ' ' + styles.Btn_type_submit }>
            <Button
              text = 'Применить'
              onClick = { this.onSubmitButtonClick }
            />
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    const {
      minDate,
      selectedDates,
      onChange,
    } = this.props;

    const airDatepickerWrapper = this.airDatepickerWrapperRef.current;
    if (airDatepickerWrapper && !this.airDatepicker) {
      this.airDatepicker = new AirDatepicker(airDatepickerWrapper, {
        range: true,
        inline: true,
        navTitles: {
          days: 'MMMM yyyy',
        },
        minDate: minDate || undefined,
        selectedDates: selectedDates || undefined,
        onSelect: ({date, formattedDate, datepicker}) => {
          this.setState({
            isResetBtnVisible: datepicker.selectedDates.length ? true : false,
          });
          
          onChange && onChange(datepicker.selectedDates);
        }
      });

      this.setState({
        isResetBtnVisible: !!this.airDatepicker.selectedDates.length,
      });
    }
  }

  shouldComponentUpdate(nextProps: DatepickerProps, nextState: DatepickerState): boolean {
    const newDatepickerOpts: Partial<AirDatepickerOptions> = {};

    const isMinDateChanged = nextProps.minDate !== this.props.minDate;
    if (isMinDateChanged) {
      newDatepickerOpts.minDate = nextProps.minDate;
    }

    const isSelectedDatesChanged = nextProps.selectedDates !== this.props.selectedDates;
    if (isSelectedDatesChanged) {
      newDatepickerOpts.selectedDates = nextProps.selectedDates;
    }
    
    const doUpdateAirDatepicker = isMinDateChanged || isSelectedDatesChanged;
    if (doUpdateAirDatepicker) {
      this.airDatepicker.update(newDatepickerOpts);
    }

    const isChangedPropState = nextProps !== this.props || nextState !== this.state;
    return isChangedPropState;
  }

  private onResetButtonClick = () => {
    this.airDatepicker.clear();
    this.props.resetCallback && this.props.resetCallback();
  }

  private onSubmitButtonClick = () => {
    this.props.submitCallback && this.props.submitCallback(this.airDatepicker.selectedDates);
  }
}

export {
  DatepickerProps,
  DatepickerState,
}
export default Datepicker;
