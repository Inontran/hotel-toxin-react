import React from 'react';

import Button from '../components/Button/Button';
import Checkbox from '../components/Checkbox/Checkbox';

import classes from './App.module.scss';

const App = () => {
  return (
    <div className = { classes.appWrapper }>
      <h1>Hotel "Toxin"</h1>
      <div>
        <div style = {{ width: '300px' }}>
          <h2>Buttons</h2>
          <Button text = 'Click me' href = '/'/>
          <br />
          <Button text = 'Click me' theme = {['purple']}/>
          <br />
          <Button text = 'Click me' theme = {['purple']} size = 'md'/>
          <br />
          <Button text = 'Click me' theme = {['white']}/>
          <br />
          <Button text = 'Click me' theme = {['purple']} width = 'full-wide'/>
          <br />
          <Button text = 'Click me' theme = {['purple', 'theme_arrow']} width = 'full-wide'/>
        </div>

        <div style = {{ width: '300px' }}>
          <h2>Checkbox</h2>
          <Checkbox text = 'Checkbox'/>
        </div>
      </div>
    </div>
  );
};

export default App;
