import React from 'react';
import moment from 'moment';

import Datepicker from '../Datepicker/Datepicker';

import Dropdown, {
  DropdownProps,
  DropdownThemes,
} from './Dropdown';
import DropdownDatepickerState from './DropdownDatepickerState';
import styles from './DoubleDropdownDatepicker.module.scss';

moment.lang('ru');

class DoubleDropdownDatepicker extends React.Component<DropdownProps, DropdownDatepickerState> {
  constructor(props: DropdownProps) {
    super(props);

    this.state = {
      isShow: this.props.isShow || false,
      formattedDatesRange: '',
      formattedDateStart: '',
      formattedDateEnd: '',
    };
  }

  render() {
    return <div className = { styles.DoubleDropdownDatepicker }>
      <div className = { styles.DropdownWrapper }>
        <Dropdown
          theme = {[DropdownThemes.withDates]}
          inputTextProps = {{ value: this.state.formattedDateStart }}
          label = 'Прибытие'
          isShow = { this.state.isShow }
          toggleCallback = {(isShow) => {
            this.setState({ isShow: isShow });
          }}
        />
      </div>
      <div className = { styles.DropdownWrapper }>
        <Dropdown
          theme = {[DropdownThemes.withDates, DropdownThemes.alignRight]}
          inputTextProps = {{ value: this.state.formattedDateEnd }}
          label = 'Выезд'
          isShow = { this.state.isShow }
          toggleCallback = {(isShow) => {
            this.setState({ isShow: isShow });
          }}
        >
          <Datepicker
            resetCallback = { this.onDatepickerReset }
            submitCallback = { this.onDatepickerSubmit }
          />
        </Dropdown>
      </div>
    </div>;
  }

  shouldComponentUpdate(nextProps: DropdownProps, nextState: DropdownDatepickerState): boolean {
    if (nextProps.isShow !== this.props.isShow) {
      this.setState({
        isShow: nextProps.isShow || false,
      });
      return false;
    }

    const isChangedPropState = nextProps !== this.props || nextState !== this.state;
    return isChangedPropState;
  }

  private onDatepickerReset = () => {
    this.setState({
      isShow: false,
      formattedDatesRange: '',
      formattedDateStart: '',
      formattedDateEnd: '',
    });
  };

  private onDatepickerSubmit = (selectedDates: Date[]) => {
    if (selectedDates.length !== 2) {
      return;
    }

    this.setState({
      isShow: false,
      formattedDatesRange: this.formatDates(selectedDates),
      formattedDateStart: this.getFormattedDate(selectedDates[0]),
      formattedDateEnd: this.getFormattedDate(selectedDates[1]),
    });
  };

  private formatDates(dates: Date[]): string {
    let formatDateOutput = 'D MMM';
    const isYearDifferent = dates[0].getFullYear() !== dates[1].getFullYear();
    if (isYearDifferent) {
      formatDateOutput += ' YYYY';
    }

    let formattedDates = '';
    if ( dates[0] ) {
      formattedDates += moment(dates[0]).format(formatDateOutput);
    }
    if ( dates[1] ) {
      formattedDates += ' — ';
      formattedDates += moment(dates[1]).format(formatDateOutput);
    }

    return formattedDates;
  }

  private getFormattedDate(date: Date): string {
    const formatDateOutput = 'DD.MM.YYYY';
    let formattedDates = '';
    if ( date ) {
      formattedDates += moment(date).format(formatDateOutput);
    }

    return formattedDates;
  }
}

export default DoubleDropdownDatepicker;
