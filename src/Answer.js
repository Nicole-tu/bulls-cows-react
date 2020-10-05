import React from 'react';
import { List, Segment } from 'semantic-ui-react';

const Answer = props => {

  return (
    <Segment inverted>
      <List divided inverted relaxed>
        {props.answer.map(answer => (
          <List.Item key={answer.key}>
            <List.Content>
              <List.Header>{answer.bullsCount}{" "}
                {answer.bullsCount.length > 0 ? "Bulls" : "Bull"}{" "}
                {answer.cowsCount} Cows</List.Header>
              <br />
                ATTEMPT{answer.attemptCount} : {answer.content}
            </List.Content>
          </List.Item>
        ))}
      </List>
    </Segment>
  )
}

export default Answer;