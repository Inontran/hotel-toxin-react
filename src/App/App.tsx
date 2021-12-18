import React from 'react';

import Button from '../components/Button/Button';

import classes from './App.module.scss';

const App = () => {
  return (
    <div className = { classes.appWrapper }>
      <h1>yeaaaa!!</h1>
      <div style = {{ width: '300px' }}>
        <Button text = 'Click me' href = '/'/>
        <br />
        <Button text = 'Click me' theme = {['purple']}/>
        <br />
        <Button text = 'Click me' theme = {['purple']} size = 'md'/>
        <br />
        <Button text = 'Click me' theme = {['white']}/>
        <br />
        <Button text = 'Click me' theme = {['purple']} width = 'full-wide'/>
      </div>
    </div>
  );
}

export default App;
