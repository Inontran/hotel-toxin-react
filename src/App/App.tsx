import React from 'react';

import Button, {
  ButtonThemes,
  ButtonSizes,
  ButtonWidth,
} from '../components/Button/Button';
import Checkbox from '../components/Checkbox/Checkbox';

import classes from './App.module.scss';

const App = () => {
  return (
    <div className = { classes.appWrapper }>
      <h1>Hotel "Toxin"</h1>
      <div>
        <div style = {{ width: '300px' }}>
          <h2>Buttons</h2>
          <Button 
            text = 'Click me'
            href = '/'
          />
          <br />
          <Button 
            text = 'Click me'
            theme = {[ButtonThemes.purple]}
          />
          <br />
          <Button 
            text = 'Click me'
            theme = {[ButtonThemes.purple]}
            size = { ButtonSizes.md }
          />
          <br />
          <Button
            text = 'Click me'
            theme = {[ButtonThemes.white]}
          />
          <br />
          <Button 
            text = 'Click me'
            theme = {[ButtonThemes.purple]}
            width = { ButtonWidth.fullWidth }
          />
          <br />
          <Button 
            text = 'Click me' 
            theme = {[ButtonThemes.purple, ButtonThemes.arrow]}
            width = { ButtonWidth.fullWidth }
          />
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
