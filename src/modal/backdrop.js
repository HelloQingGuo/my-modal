import React, { Component } from 'react';
import './backdrop.css';

const Backdrop = ({ show, onHide }) =>
  show ? <div className="backdrop" onClick={onHide} /> : null;

export default Backdrop;
