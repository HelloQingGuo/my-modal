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
      <div className="App">
        <button onClick={this.handleCloseOnClick}>
          {isModalHidden ? 'show' : 'close'}
        </button>
        <Modal show={isModalHidden} onHide={this.handleCloseOnHide}>
          modal box body
        </Modal>
      </div>
    );
  }
}

export default App;
