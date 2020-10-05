import React from 'react';
import Game from './Game';
import Info from './Info';
import { Container } from 'semantic-ui-react'
import './App.css';

const App = () => (
  <div className="App" >
    <Container>
      <h1>Bulls and Cows game</h1>
      <Info />
      <Game />
      <a className="sourceLink" href="https://github.com/Nicole-tu/bulls-cows-react">https://github.com/Nicole-tu/bulls-cows-react</a>
    </Container>
    <div className="backgroundFont">
      <p>1A2B</p>
      <p>2A1B</p>
      <p>0A3B</p>
    </div>
  </div>
);

export default App;
