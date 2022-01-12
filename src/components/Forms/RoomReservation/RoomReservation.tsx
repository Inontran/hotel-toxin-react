import React from 'react';

import { formatPrice } from '../../../shared/functions';
import Button, {
  ButtonThemes,
  ButtonWidth,
} from '../../Button/Button';
import Dropdown from '../../Dropdown/Dropdown';
import DoubleDropdownDatepicker from '../../Dropdown/DoubleDropdownDatepicker';

import RoomReservationProps from './RoomReservationProps';
import styles from './RoomReservation.module.scss';

class RoomReservation extends React.PureComponent<RoomReservationProps> {
  render() {
    const {
      roomNumber,
      roomType = undefined,
      roomPrice,
      priceTime,
      listService = [],
    } = this.props;

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
            <span className = { styles.RoomPaymentPeriod }>{priceTime}</span>
          </div>
        </div>
        <div className = { styles.DatesContainer}>
          <DoubleDropdownDatepicker/>
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
              {
                listService.map((service) => {
                  return (
                    <tr>
                      {
                        service.tooltip
                        ? <td className = { styles.TableCell + ' ' + styles.withTooltip }>
                          {service.name}
                          <div className = { styles.Tooltip } title = { service.tooltip }></div>
                        </td>
                        : <td className = { styles.TableCell }>
                          {service.name}
                        </td>
                      }
                      <td className = { styles.TableCell + ' ' + styles.withPrice }>
                        {formatPrice(service.price)}
                      </td>
                    </tr>
                  )
                })
              }
            </table>
          </div>
        }

        <p className = { styles.TotalPriceWrapper }>
          <span className = { styles.Word }>Итого</span>
          <span className = { styles.Points }></span>
          <span className = { styles.TotalPrice }>-</span>
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
}

export {
  RoomReservationProps,
}
export default RoomReservation;