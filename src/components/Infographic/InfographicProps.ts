import InfographicItem from './InfographicItem';

interface InfographicProps {
  /**
   * id блока.
   */
  id?: string,

  /**
  * Массив пуктов списка.
  */
  items?: Array<InfographicItem>,
}

export default InfographicProps;
