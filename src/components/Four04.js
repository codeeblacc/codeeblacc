import React from 'react';
import { useNavigate } from 'react-router-dom';
import { File } from 'react-feather';

import Header from '../widgets/Header';

export default function Four04() {
  let history = useNavigate();

  document.title = `Page Not Found — Codeeblacc`;

  return (
    <section id="404">
      <Header />
      <div className="not-found">
        <div className="container">
          <div className="center-text">
            <File />
            <br /><br />
            <div className="h3">Page Not Found</div>
              <p className="smoke-text">
                The page you are looking for does not exist.<br />
                Might have followed a broken url to this page.
              </p>
              <br />
              <center>
                <div className="nav-action-click" onClick={() => history(-1)}></div>
              </center>
          </div>
        </div>
      </div>
    </section>
  )
}
