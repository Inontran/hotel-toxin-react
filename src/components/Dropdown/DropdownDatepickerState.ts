import DropdownState from './DropdownState';

interface DropdownDatepickerState extends DropdownState {
  
  formattedDatesRange: string,
  formattedDateStart: string,
  formattedDateEnd: string,
}

export default DropdownDatepickerState;
