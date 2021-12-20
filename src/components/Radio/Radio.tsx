import React from 'react';

import styles from './Radio.module.scss';

interface RadioProps {
  /**
   * @description id блока.
   * @type {string}
   */
  id?: string,

  /**
   * @description Tabindex радио-кнопки.
   * @type {number}
   */
  tabIndex?: number,

  /**
   * @description Тип поля радио-кнопки. По умолчанию "checkbox".
   * @type {string}
   * @defaultvalue 'radio'
   */
  inputType?: 'checkbox' | 'radio',

  /**
   * @description Текст радио-кнопки.
   * @type {string}
   */
  text?: string,

  /**
   * @description Имя поля радио-кнопки.
   * @type {string}
   */
  name?: string,

  /**
   * @description Значение input радио-кнопки (атрибут value).
   * @type {string | number}
   */
  value?: string | number,

  /**
   * @description Выбрана ли радио-кнопка или нет (атрибут checked).
   * @type {boolean}
   */
  checked?: boolean,
}

const Radio = ({
  id = undefined,
  tabIndex = undefined,
  inputType = 'radio',
  text = undefined,
  name = undefined,
  value = undefined,
  checked = undefined,
  ...props
}: RadioProps) => {
  const classes = [styles.Radio];

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
          text &&
          <span className = { styles.Text }>{text}</span>
        }
      </label>
    </div>
  )

};

export default Radio;

