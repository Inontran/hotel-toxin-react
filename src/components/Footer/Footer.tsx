import React from 'react';

import Logo from '../Logo/Logo';
import Heading, {
  HeadingSizes,
} from '../Heading/Heading';
import Subscription from '../Forms/Subscription/Subscription';
import SocialNets from '../SocialNets/SocialNets';

import FooterProps from './FooterProps';
import FooterMenu from './FooterMenu';
import FooterThemes from './FooterThemes';
import styles from './Footer.module.scss';

const Footer = ({
  themes = [],
  mainText = undefined,
  subscriptionHeading = undefined,
  subscriptionText = undefined,
  copyrightText = undefined,
  menuItems = [],
  ...props
}: FooterProps) => {
  const blockClasses = [styles.Footer];

  if (themes.indexOf(FooterThemes.borderedTop) != -1) {
    blockClasses.push(styles.bordered_top);
  }

  return (
    <footer className = { blockClasses.join(' ') }>
      <div className = { styles.MainContent }>
        <div className = { styles.Logo }>
          <div className = { styles.LogoWrapper }>
            <Logo/>
          </div>
          {
            mainText &&
            <p className = { styles.Text }>{mainText}</p>
          }
        </div>

        {
          menuItems.map((menu, index) => {
            if (index > 2) return null;
            return <div 
              key = {Math.random() * 1000 * index}
              className = { styles.NavItemsMenu }
            >
              {
                menu.title &&
                <div className = { styles.TitleWrapper }>
                  <Heading
                    text = { menu.title }
                    size = { HeadingSizes.small }
                  />
                </div>
              }
              <nav className = { styles.List }>
                {
                  menu.items.map((item, innnerIndex) => {
                    return (
                      <a
                        key = {Math.random() * 1000 * innnerIndex}
                        className = { styles.ListLink }
                        href = { item.href }
                      >{item.name}</a>
                    );
                  })
                }
              </nav>
            </div>;
          })
        }

        <div className = { styles.Subscription }>
          {
            subscriptionHeading &&
            <div className = { styles.TitleWrapper }>
              <Heading
                text = {subscriptionHeading}
                size = { HeadingSizes.small }
              />
            </div>
          }
          {
            subscriptionText &&
            <p className = { styles.SubscriptionText }>{subscriptionText}</p>
          }
          <Subscription/>
        </div>
      </div>

      <div className = { styles.Copyright }>
        <div className = { styles.CopyrightWrapper }>
          <p className = { styles.CopyrightText }>{copyrightText}</p>
          <SocialNets
            items = {[
              {
                src: require('../../shared/img/twitter-icon.svg'),
                href: '//twitter.com/',
                alt: 'twit',
                title: 'Twitter',
              },
              {
                src: require('../../shared/img/fb-icon.svg'),
                href: '//facebook.com/',
                alt: 'fb',
                title: 'Facebook',
              },
              {
                src: require('../../shared/img/insta-icon.svg'),
                href: '//instagram.com/',
                alt: 'insta',
                title: 'Instagram',
              },
            ]}
          />
        </div>
      </div>
    </footer>
  );
};

export {
  FooterProps,
  FooterMenu,
  FooterThemes,
};
export default Footer;