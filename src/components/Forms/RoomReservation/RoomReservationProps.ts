import ServiceItem from './ServiceItem';

interface RoomReservationProps {
  /**
   * Номер апартаментов.
   */
  roomNumber: string,

  /**
   * Тип апартаментов (люкс).
   */
  roomType?: string,

  /**
   * Стоимость апартаментов.
   */
  roomPrice: number,

  /**
    * За какой период указана стоимость, например, "в сутки" или "в неделю".
    */
  priceTime?: string,

  /**
   * Список услуг.
   */
  listService?: Array<ServiceItem>,
}

export default RoomReservationProps;
