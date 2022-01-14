import React from 'react';

import {
  formatPrice,
  declineWord,
} from '../../../shared/functions';
import Button, {
  ButtonThemes,
  ButtonWidth,
} from '../../Button/Button';
import Dropdown from '../../Dropdown/Dropdown';
import DropdownDatepicker from '../../Dropdown/DropdownDatepicker';

import RoomReservationProps from './RoomReservationProps';
import RoomReservationState from './RoomReservationState';
import ServiceItem from './ServiceItem';
import styles from './RoomReservation.module.scss';

class RoomReservation extends React.PureComponent<RoomReservationProps, RoomReservationState> {
  constructor(props: RoomReservationProps) {
    super(props);

    this.state = {
      countDaysInRoom: 0,
      totalPrice: 0,
    };
  }

  render() {
    const {
      roomNumber,
      roomType,
      roomPrice,
      listService = [],
    } = this.props;

    const priceTime = 'в сутки';

    const {
      countDaysInRoom,
      totalPrice,
    } = this.state;

    return (
      <form
        className = { styles.RoomReservation }
        action = 'post'
      >
        <div className = { styles.RoomInfo }>
          <div className = { styles.RoomName }>
            <span className = { styles.Symbol }>№</span>
            <span className = { styles.RoomNumber }>{roomNumber}</span>
            {
              roomType &&
              <span className = { styles.RoomType }>{roomType}</span>
            }
          </div>
          <div className = { styles.RoomPrice }>
            <span className = { styles.RoomNumberPrice }>{formatPrice(roomPrice)}</span>
            <span className = { styles.RoomPaymentPeriod }>{' ' + priceTime}</span>
          </div>
        </div>
        <div className = { styles.DatesContainer}>
          <DropdownDatepicker
            label = 'Даты пребывания в номере'
            minDate = { new Date() }
            onChange = { this.handlerDatepcikerChange }
          />
        </div>
        <div className = { styles.InputWrapper }>
          <Dropdown
            label = 'Гости'
            inputTextProps={{placeholder: 'Сколько гостей'}}
          />
        </div>
        {
          listService &&
          <div className = { styles.TableWrapper }>
            <table className = { styles.Table }>
              <tbody>
                <ServiceRow
                  key = { Math.random() * 1000 }
                  name = { `${formatPrice(roomPrice)} х ${countDaysInRoom} `
                    + declineWord(countDaysInRoom, ['сутки', 'суток', 'суток'])
                  }
                  price = { roomPrice * countDaysInRoom }
                />
                {
                  listService.map((service) => {
                    return <ServiceRow
                      key = { Math.random() * 1000 }
                      {...service}
                    />
                  })
                }
              </tbody>
            </table>
          </div>
        }

        <p className = { styles.TotalPriceWrapper }>
          <span className = { styles.Word }>Итого</span>
          <span className = { styles.Points }></span>
          <span className = { styles.TotalPrice }>{formatPrice(totalPrice)}</span>
        </p>
        <Button
          text = 'Забронировать'
          type = 'submit'
          theme = {[ButtonThemes.purple, ButtonThemes.arrow]}
          width = { ButtonWidth.fullWidth }
        />
      </form>
    )
  }

  private handlerDatepcikerChange = (selectedDates: Date[]) => {
    const countDaysInRoom = this.getCountDaysBetweenDates(selectedDates[0], selectedDates[1]);

    this.setState({
      countDaysInRoom: countDaysInRoom,
      totalPrice: this.calcTotalPrice(countDaysInRoom),
    });
  }

  private getCountDaysBetweenDates(dateStart: Date, dateEnd: Date): number {
    if (!dateStart || !dateEnd) {
      return 0;
    }

    const countDays = (dateEnd.getTime() - dateStart.getTime()) / (24 * 3600 * 1000);
    return Math.ceil(countDays);
  }

  private calcTotalPrice = (countDaysInRoom: number = this.state.countDaysInRoom): number => {
    const {
      roomPrice,
      listService,
    } = this.props;

    let totalPrice = countDaysInRoom * roomPrice;

    listService?.forEach((service) => {
      totalPrice += service.price;
    });

    return totalPrice;
  }
}

const ServiceRow = ({
  tooltip,
  name,
  price,
  ...props
}: ServiceItem) => {
  return (
    <tr>
      {
        tooltip
        ? <td className = { styles.TableCell + ' ' + styles.withTooltip }>
          {name}
          <div className = { styles.Tooltip } title = { tooltip }></div>
        </td>
        : <td className = { styles.TableCell }>
          {name}
        </td>
      }
      <td className = { styles.TableCell + ' ' + styles.withPrice }>
        {formatPrice(price)}
      </td>
    </tr>
  )
}

export {
  RoomReservationProps,
}
export default RoomReservation;