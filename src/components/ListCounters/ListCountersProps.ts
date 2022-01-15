import CounterItem from './CounterItem';

interface ListCountersProps {
  /**
   * Тип блока со счетчиками. Если 1, тогда блок отображается с кнопками сброса и подтверждения.
   */
  type?: number,

  /**
   * Массив полей-счетчиков.
   */
  arrayCounters: Array<CounterItem>,

  /**
   * Функция обратного вызова после изменения значений полей счетчиков.
   */
  onChange?: () => void,
}

export default ListCountersProps;
