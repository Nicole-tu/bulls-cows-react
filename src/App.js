import React, { Component } from 'react';
import Game from './Game';
import './App.css';

class App extends Component {
  state = {
    numberOfAttemptsSelected: 0
  };

  setNumberOfAttempts(numberOfAttemptsSelected) {
    this.setState({ numberOfAttemptsSelected });
  }

  render() {
    return (
      <div className="App" >
        <h1 className="header">Bulls and Cows game</h1>
        <button onClick={() => window.location.reload()}>
          PLAY AGAIN
        </button>
        <Game
          numberOfAttemptsSelected={this.state.numberOfAttemptsSelected}
        />
        <a className="sourceLink" href="https://github.com/rashmiap/bulls-cows-react-game">https://github.com/rashmiap/bulls-cows-react-game</a>
      </div>
    );
  }
}

export default App;
