import React, { Component } from 'react';
import Backdrop from './backdrop';
import './modal.css';

class Modal extends Component {
  render() {
    const { show, onHide } = this.props;
    return (
      <div>
        <Backdrop show={show} onHide={onHide} />
        <div className={show ? 'modal' : 'modal hide'}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
