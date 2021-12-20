import React from 'react';

import styles from './Checkbox.module.scss';

interface CheckboxProps {
  /**
   * @description id блока.
   * @type {string}
   */
  id?: string,

  /**
   * @description Tabindex чекбокса.
   * @type {number}
   */
  tabIndex?: number,

  /**
   * @description Тип поля чекбокса. По умолчанию "checkbox".
   * @type {string}
   * @defaultvalue 'checkbox'
   */
  inputType?: 'checkbox' | 'radio',

  /**
   * @description Текст чекбокса.
   * @type {string}
   */
  text?: string,

  /**
   * @description Заголовок чекбокса.
   * @type {string}
   */
  title?: string,

  /**
   * @description Имя поля чекбокса.
   * @type {string}
   */
  name?: string,

  /**
   * @description Значение input чекбокса (атрибут value).
   * @type {string | number}
   */
  value?: string | number,

  /**
   * @description Выбран ли чекбокс или нет (атрибут checked).
   * @type {boolean}
   */
  checked?: boolean,

  /**
   * @description Темы оформления чекбокса. Некоторые можно групировать друг с другом, а некоторые нельзя.
   * @type {Array<string>}
   */
  theme?: Array<'type_toggle'>,
}

const Checkbox = ({
  id = undefined,
  tabIndex = undefined,
  inputType = 'checkbox',
  text = undefined,
  title = undefined,
  name = undefined,
  value = undefined,
  checked = undefined,
  theme = [],
  ...props
}: CheckboxProps) => {
  const classes = [styles.Checkbox];

  if (theme.indexOf('type_toggle') != -1) {
    classes.push(styles.type_toggle);
  }

  return (
    <div
      className = { classes.join(' ') }
      id = { id || undefined }
      { ...props }
    >
      <label className = { styles.Wrapper }>
        <input className = { styles.Input }
          type = { inputType || undefined }
          tabIndex = { tabIndex || undefined }
          name = { name || undefined }
          value = { value || undefined }
          checked = { checked || undefined }
        />
        <span className = { styles.CustomInput }></span>
        {
          title && 
          <span className = { styles.TextWrapper }>
            <span className = { styles.Title }>{title}</span>
            <span className = { styles.SmallText }>{text}</span>
          </span>
        }
        {
          !title && text &&
          <span className = { styles.TextWrapper }>
            <span className = { styles.Text }>{text}</span>
          </span>
        }
      </label>
    </div>
  )

};

export default Checkbox;
