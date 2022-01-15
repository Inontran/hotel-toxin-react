import React from 'react';

import Heading, {
  HeadingSizes,
} from '../../Heading/Heading';
import InputText from '../../InputText/InputText';
import Button, {
  ButtonThemes,
  ButtonWidth,
} from '../../Button/Button';
import Radio from '../../Radio/Radio';
import Checkbox, {
  CheckboxThemes,
} from '../../Checkbox/Checkbox';

import SiteRegistrationProps from './SiteRegistrationProps';
import styles from './SiteRegistration.module.scss';

class SiteRegistration extends React.PureComponent<SiteRegistrationProps> {
  render() {
    const {
      buttonRegHref,
    } = this.props;

    return (
      <form
        className = { styles.SiteRegistration }
        action = 'post'
      >
        <div className = { styles.TitleWrapper }>
          <Heading
            text = 'Регистрация аккаунта'
            size = { HeadingSizes.large }
            tag = 'h1'
          />
        </div>
        <div className = { styles.InputName }>
          <InputText
            placeholder = 'Имя'
          />
        </div>
        <div className = { styles.InputSurname }>
          <InputText
            placeholder = 'Фамилия'
          />
        </div>
        <div className = { styles.Genders }>
          <div className = { styles.RadioWrapper }>
            <Radio
              text = 'Мужчина'
              name = 'gender'
              checked = {true}
            />
          </div>
          <div className = { styles.RadioWrapper }>
            <Radio
              text = 'Женщина'
              name = 'gender'
            />
          </div>
        </div>
        <div className = { styles.InputDateBirthday }>
          <InputText
            label = 'Дата рождения'
            inputPattern = 'date'
          />
        </div>
        <div className = { styles.SubtitleWrapper }>
          <Heading
            text = 'Данные для входа в сервис'
            size = { HeadingSizes.small }
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
        <div className = { styles.ToggleSubscription }>
          <Checkbox
            text = 'Получать спецпредложения'
            theme = {[CheckboxThemes.toggle]}
          />
        </div>
        <div className = { styles.BtnRegistration }>
          <Button
            text = 'Зарегистрироваться'
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
    );
  }
}

export {
  SiteRegistrationProps,
};
export default SiteRegistration;
