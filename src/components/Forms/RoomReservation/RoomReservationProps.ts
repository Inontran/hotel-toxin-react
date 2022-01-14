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
   * Список услуг.
   */
  listService?: Array<ServiceItem>,
}

export default RoomReservationProps;
