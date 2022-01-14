interface RoomReservationState {
  /**
   * Количество суток аренды номера.
   */
  countDaysInRoom: number,

  /**
   * Полная стоимость аренды номера.
   */
  totalPrice: number,
}

export default RoomReservationState;
