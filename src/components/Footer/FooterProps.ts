import FooterThemes from './FooterThemes';
import FooterMenu from './FooterMenu';

interface FooterProps {
  themes?: Array<FooterThemes>,
  mainText?: string,
  subscriptionHeading?: string,
  subscriptionText?: string,
  copyrightText?: string,
  menuItems?: Array<FooterMenu>,
}

export default FooterProps;
