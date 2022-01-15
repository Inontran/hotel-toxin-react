import React from 'react';

import { declineWord } from '../../shared/functions';
import InputNumber from '../InputNumber/InputNumber';
import Button from '../Button/Button';

import ListCountersProps from './ListCountersProps';
import ListCountersState from './ListCountersState';
import styles from './ListCounters.module.scss';

class ListCounters extends React.PureComponent<ListCountersProps, ListCountersState> {
  constructor(props: ListCountersProps) {
    super(props);

    this.state = {
      formatSumAllCounters: '',
      arrayCounters: this.props.arrayCounters.map((counter, index) => {
        return {
          value: 0,
          groupItemId: index,
          ...counter
        };
      }),
    };
  }

  render() {
    return (
      <div className = { styles.ListCounters }>
        {
          this.state.arrayCounters.map((counter) => {
            const {
              label,
              value = 0,
              inputName,
            } = counter;

            return <div
              key = { Math.random() * 1000 }
              className = { styles.Counter }
            >
              <span className = { styles.CounterLabel }>{label}</span>
              <div className = { styles.InputNumberWrapper }>
                <InputNumber
                  name = { inputName }
                  value = { value }
                  min = {0}
                />
              </div>
            </div>
          })
        }
        {
          this.props.type === 1 &&
          <div className = { styles.Btns }>
            <div className = { styles.Btn }>
              <Button
                text = 'Очистить'
              />
            </div>
            <div className = {[styles.Btn, styles.type_submit].join(' ') }>
              <Button
                text = 'Применить'
                onClick = { this.calcAllCounters }
              />
            </div>
          </div>
        }
      </div>
    )
  }

  private calcAllCounters = () => {
    let countNotZeroItems = 0;
    let formatSumAllCounters = '';

    this.state.arrayCounters.forEach((counter) => {
      const {
        label,
        value = 0,
        textOneItems = label,
        textTwoItems = label,
        textManyItems = label,
        groupItemId,
      } = counter;
      
      if (value !== 0) {
        countNotZeroItems += 1;
        formatSumAllCounters += `${value} ${declineWord(value, [textOneItems, textTwoItems, textManyItems])}`;
      }
      if (countNotZeroItems !== 0) {
        formatSumAllCounters += ', ';
      }
    });

    console.log(formatSumAllCounters);
  }
}

export {
  ListCountersProps,
}
export default ListCounters;