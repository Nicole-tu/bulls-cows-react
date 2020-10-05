import React from 'react';
import { Icon, Message } from 'semantic-ui-react';

const Info = () => (
  <Message info floating>
    <Message.Header>
      <Icon name="question circle" /> How to play
    </Message.Header>
    <p>The goal of this game is to guess a 4-digit number within the least number of attempts possible.</p>
    <p>With every guess, you will get a feedback indicating how many Bulls and Cows you got with the guess.</p>
    <p>A Bull means: one of the digits is correct, and is also at the right place.</p>
    <p>A Cow means: one of the digits is a right number, but not at the right place.</p>
    <p> For example, given that the answer is 0130, a guess of 3610 will receive 1 Bull 2 Cows. 1 Bull is 0, 2 Cows are 1 and 3.</p>
  </Message>
);

export default Info;