/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Container from './components/Container';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Container />
      </div>
    );
  }
}

export default App;
