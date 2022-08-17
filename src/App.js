import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './components/Home';
import Four04 from './components/Four04';
import Launch from './components/Launch';
import CaseStudy from './components/CaseStudy';

import 'animate.css';
import './assets/css/element.css';
import './assets/css/base.css';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/launch/:slug" element={<Launch />} />
          <Route exact path="/cases/:slug" element={<CaseStudy />} />

          <Route path="*" element={<Four04 />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
