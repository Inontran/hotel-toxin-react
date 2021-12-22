import SocialNetsItem from './SocialNetsItem';

interface SocialNetsProps {
  /**
   * id блока.
   */
  id?: string,

  /**
   * Массив пуктов списка.
   */
  items?: Array<SocialNetsItem>,
}

export default SocialNetsProps;
