import React from 'react';

import Datepicker, {
  DatepickerProps,
} from '../Datepicker/Datepicker';

import Dropdown, {
  DropdownProps,
  DropdownThemes
} from './Dropdown';

class DropdownDatepicker extends React.Component<DatepickerProps> {
  constructor(props: DropdownProps) {
    super(props);
  }

  render() {
    return <Dropdown
      theme = {[DropdownThemes.withDates]}
      label = 'Даты пребывания в отеле'
    >
      <Datepicker/>
    </Dropdown>
  }
}

export default DropdownDatepicker;
