import React, { Component } from 'react';
import Modal from './modal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalHidden: true
    };
  }
  handleCloseOnClick = () => {
    this.setState({ isModalHidden: !this.state.isModalHidden });
  };

  handleCloseOnHide = () => {
    this.setState({ isModalHidden: false });
  };

  render() {
    const { isModalHidden } = this.state;
    return (
      <div>
        <button onClick={this.handleCloseOnClick}>
          {isModalHidden ? 'show' : 'close'}
        </button>
        <Modal show={isModalHidden} onHide={this.handleCloseOnHide}>
          modal body
        </Modal>
      </div>
    );
  }
}

export default App;
