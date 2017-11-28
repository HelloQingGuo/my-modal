import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {

  render() {
    const { show } = this.props;
    return (
      <div className='modal-wrapper'>
        <div  className={show ? 'show modal' : 'modal hide '}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
