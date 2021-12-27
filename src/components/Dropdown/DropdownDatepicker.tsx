import React from 'react';
import moment from 'moment';

import Datepicker from '../Datepicker/Datepicker';

import Dropdown, {
  DropdownProps,
  DropdownThemes
} from './Dropdown';
import DropdownDatepickerState from './DropdownDatepickerState';

moment.lang('ru');

class DropdownDatepicker extends React.Component<DropdownProps, DropdownDatepickerState> {
  constructor(props: DropdownProps) {
    super(props);

    this.state = {
      isShow: this.props.isShow || false,
      inputValue: this.props.inputTextProps?.value || '',
    };
  }

  render() {
    return <Dropdown
      theme = {[DropdownThemes.withDates]}
      inputTextProps = {{ value: this.state.inputValue, }}
      {...this.props}
      isShow = { this.state.isShow }
      toggleCallback = {(isShow) => {
        this.setState({ isShow: isShow, });
      }}
    >
      <Datepicker
        resetCallback = { this.onDatepickerReset }
        submitCallback = { this.onDatepickerSubmit }
      />
    </Dropdown>
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
      inputValue: '',
    });
  }

  private onDatepickerSubmit = (selectedDates: Date[]) => {
    if (selectedDates.length !== 2) {
      return;
    }

    this.setState({
      isShow: false,
      inputValue: this.formatDates(selectedDates),
    });
  }

  private formatDates(dates: Date[]): string {
    let formatDateOutput = 'D MMM';
    const isYearDifferent = dates[0].getFullYear() !== dates[1].getFullYear();
    if (isYearDifferent) {
      formatDateOutput += ' YYYY';
    }

    let formattedDates = '';
    if( dates[0] ) {
      formattedDates += moment(dates[0]).format(formatDateOutput);
    }
    if( dates[1] ) {
      formattedDates += ' — ';
      formattedDates += moment(dates[1]).format(formatDateOutput);
    }

    return formattedDates;
  }
}

export default DropdownDatepicker;
