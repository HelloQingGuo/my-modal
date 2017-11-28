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
    console.log('ths', this);
    this.setState({ isModalHidden: !this.state.isModalHidden });
  };
  render() {
    const { isModalHidden } = this.state;
    return (
      <div className="App">
        <button
          onClick={this.handleCloseOnClick}
          style={{ position: 'relative', zIndex: 9999 }}
        >
          {isModalHidden ? 'show' : 'close'}
        </button>
        <Modal show={isModalHidden}>modal box body</Modal>
      </div>
    );
  }
}

export default App;
