import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './components/Home';
import { Four04 } from './components/Four04';

import 'animate.css';
import './assets/css/element.css';
import './assets/css/base.css';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<Four04 />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
