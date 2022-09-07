import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './components/Home';
import Four04 from './components/Four04';
import Launch from './components/Launch';
import CaseStudy from './components/CaseStudy';

import 'animate.css';
import './assets/css/element.css';

import { cacheImages } from './utils';

export class App extends React.Component {
  loadImages = async () => {
    const loader = document.querySelector('.preloader');
    const pageRoutes = document.querySelector('.pageRoutes');

    const imagesList = [
      "https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-01-01.png",
      "https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-01-02.png",
      "https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-01-03.png",
      "https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-01-04.png",
      "https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-01-05.png",
      "https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-02-01.png",
      "https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-02-02.png",
      "https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-02-03.png",
      "https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-02-04.png",
      "https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-02-05.gif",
    ]

    await cacheImages(imagesList);

    setTimeout(() => {
      pageRoutes.classList.add('true');
    }, 2500);
    setTimeout(() => {
      loader.classList.add('done');
    }, 3000);
    setTimeout(() => {
      loader.classList.add('hide');
    }, 4000);
  }

  componentDidMount() {
    this.loadImages();
  }
  
  render() {
    return (
      <BrowserRouter>
        <div className="preloader">
          <div className="images">
            <img src="https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-01-01.png" alt="notVisible" />
            <img src="https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-01-02.png" alt="notVisible" />
            <img src="https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-01-03.png" alt="notVisible" />
            <img src="https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-01-04.png" alt="notVisible" />
            <img src="https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-01-05.png" alt="notVisible" />
            <img src="https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-02-01.png" alt="notVisible" />
            <img src="https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-02-02.png" alt="notVisible" />
            <img src="https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-02-03.png" alt="notVisible" />
            <img src="https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-02-04.png" alt="notVisible" />
            <img src="https://codeeblacc.s3.us-west-2.amazonaws.com/cstud-02-05.gif" alt="notVisible" />
          </div>
          <div className="large-text">
            <div className="shine">codeeblacc&trade;</div>
            <p><span></span></p>
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
