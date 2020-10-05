import React, { Component, Fragment } from 'react';
import { Button, Divider, Form, Icon, Input } from 'semantic-ui-react';
import Answer from './Answer';
import ModalWinner from './ModalWinner';
import './Game.css';

class Game extends Component {
  state = {
    guessNumber: '',
    secretNumber: '',
    attempts: [],
    attemptCount: 0,
    gameWon: false,
    started: false
  };

  randomNumber = () => {
    let str = '';
    let arr = [];
    for (let i = 0; i < 4; i++) {
      str = Math.round(Math.random() * (10 - i));
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] === str) {
          arr.splice(j, 1);
          i--;
        }
      }
      arr.push(str);
    }
    console.log(arr.join(''));
    return arr.join('');
  };

  startGame = () => this.setState({
    secretNumber: this.randomNumber(),
    started: true
  });

  handleInputChange = event => {
    if (event.target.value.length <= 4) {
      this.setState({
        guessNumber: event.target.value
      });
    }
  };

  reset = () =>
    this.setState({
      guessNumber: ''
    });

  restartGame = () =>
    this.setState({
      guessNumber: '',
      secretNumber: '',
      attempts: [],
      attemptCount: 0,
      gameWon: false,
      started: false
    });

  checkAnswer = event => {
    event.preventDefault();
    const { guessNumber, secretNumber, attemptCount } = this.state;

    const re = /^\d{4}$/;
    if (re.test(guessNumber)) {
      let secretArray = [],
        guessArray = [],
        bulls = 0,
        cows = 0;
      secretArray = secretNumber.split("");
      guessArray = guessNumber.split("");
      secretArray.forEach((key, index) => {
        if (secretArray[index] === guessArray[index]) {
          bulls = bulls + 1;
          secretArray[index] = "X";
          guessArray[index] = "Z";
        }
      });
      secretArray.forEach((key, index) => {
        if (secretArray.indexOf(guessArray[index]) >= 0) {
          secretArray[secretArray.indexOf(guessArray[index])] = "";
          cows = cows + 1;
        }
      });

      if (bulls === 4) {
        this.setState({
          gameWon: true
        });
      }

      let newAttempt = {
        key: Date.now(),
        content: guessNumber,
        bullsCount: bulls,
        cowsCount: cows,
        attemptCount: attemptCount + 1
      };

      this.setState(prevState => {
        return {
          guessNumber: "",
          attemptCount: prevState.attemptCount + 1,
          attempts: [newAttempt, ...prevState.attempts]
        };
      });
    }
  };

  render() {
    const { guessNumber, attempts, gameWon, started } = this.state;

    return (
      <Fragment>
        <ModalWinner gameWon={gameWon} restartGame={this.restartGame} />
        <Button color='green' onClick={this.startGame}><Icon name='play' />START</Button>
        <Button color='red' onClick={this.restartGame}><Icon name='refresh' />PLAY AGAIN</Button>

        <Divider hidden />

        <Form noValidate autoComplete="off">
          <Form.Field>
            <label style={{
              color: "white", fontSize: "2rem", marginBottom: "10px"
            }}>Guess</label>
            <Input
              placeholder="0000"
              onFocus={e => (e.target.placeholder = "")}
              onBlur={e => (e.target.placeholder = "0000")}
              value={guessNumber}
              style={{
                width: "240px", fontSize: "2rem"
              }}
              onChange={this.handleInputChange}
              disabled={!started}
            />
          </Form.Field>

          <Button primary onClick={this.checkAnswer}>Submit</Button>
          <Button onClick={this.reset}>Reset</Button>
        </Form>
        {
          attempts.length > 0
            ?
            <Answer answer={attempts} /> : null
        }
      </Fragment >
    );
  }
}

export default Game;