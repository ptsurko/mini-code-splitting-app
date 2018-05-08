import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import { A } from '../utils/utils';
import './App.scss';

const App = () => (
  <div className="app">
    <Header className="app-header" />
    <div className="app-content">
      <Nav className="app-nav" />
      <Main className="app-main" />
    </div>
  </div>
)

export default App
