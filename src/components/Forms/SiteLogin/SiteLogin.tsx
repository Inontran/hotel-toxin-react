import React from 'react';

import Heading, {
  HeadingSizes,
} from '../../Heading/Heading';
import InputText from '../../InputText/InputText';
import Button, {
  ButtonThemes,
  ButtonWidth,
} from '../../Button/Button';

import SiteLoginProps from './SiteLoginProps';
import styles from './SiteLogin.module.scss';

class SiteLogin extends React.PureComponent<SiteLoginProps> {
  render () {
    const {
      buttonRegHref = undefined,
    } = this.props;

    return (
      <form
        className = { styles.SiteLogin }
        action = 'post'
      >
        <div className = { styles.TitleWrapper }>
          <Heading
            text = 'Войти'
            size = { HeadingSizes.large }
            tag = 'h1'
          />
        </div>
        <div className = { styles.InputEmail }>
          <InputText
            inputPattern = 'email'
          />
        </div>
        <div className = { styles.InputPassword }>
          <InputText
            type = 'password'
            placeholder = 'Пароль'
          />
        </div>
        <div className = { styles.BtnLogin }>
          <Button
            text = 'Войти'
            theme = {[ButtonThemes.purple, ButtonThemes.arrow]}
            width = { ButtonWidth.fullWidth }
            type = 'submit'
          />
        </div>
        {
          buttonRegHref &&
          <div className = { styles.Footer }>
            <p className = { styles.FooterText }>Нет аккаунта на Toxin?</p>
            <div className = { styles.FooterButton }>
              <Button
                text = 'Создать'
                theme = {[ButtonThemes.white]}
                href = {buttonRegHref}
              />
            </div>
          </div>
        }
      </form>
    )
  }
}

export {
  SiteLoginProps,
}
export default SiteLogin;
