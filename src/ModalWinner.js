import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

class ModalWinner extends Component {

  state = {
    modalOpen: false
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.gameWon !== this.props.gameWon && this.props.gameWon) {
      this.handleOpen();
    }
  }

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => {
    this.setState({ modalOpen: false });
    this.props.restartGame();
  };

  render() {
    return (
      <Modal basic size='small' open={this.state.modalOpen} onClose={this.handleClose} >
        <Header icon>
          <Icon name='like' />
        Win
      </Header>
        <Modal.Content>
          <p>
            You have won this game, play again.
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' inverted onClick={this.handleClose}>
            <Icon name='checkmark' /> OK
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default ModalWinner;