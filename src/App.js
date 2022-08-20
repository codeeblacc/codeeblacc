import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './components/Home';
import Four04 from './components/Four04';
import Launch from './components/Launch';
import CaseStudy from './components/CaseStudy';

import 'animate.css';
import './assets/css/element.css';

export class App extends React.Component {
  componentDidMount() {
    const loader = document.querySelector('.preloader');
    const pageRoutes = document.querySelector('.pageRoutes');

    setTimeout(() => {
      pageRoutes.classList.add('true');
    }, 7500);
    setTimeout(() => {
      loader.classList.add('done');
    }, 8000);
    setTimeout(() => {
      loader.classList.add('hide');
    }, 9000);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="preloader">
          <div className="large-text">
            <div className="shine">@codeeblacc</div>
          </div>
        </div>
        <div className="pageRoutes">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/launch/:slug" element={<Launch />} />
            <Route exact path="/cases/:slug" element={<CaseStudy />} />
            <Route path="*" element={<Four04 />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
